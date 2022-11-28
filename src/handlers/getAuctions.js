import createError from 'http-errors';
import validator from '@middy/validator';
import commonMiddleware from '../lib/commonMiddleware';
import { getAuctionsByStatus } from '../lib/getAuctionsByStatus';
import getAuctionsSchema from '../lib/schemas/getAuctionsSchema';

async function getAuctions(event, context) {
  const { status } = event.queryStringParameters;

  try {
    const auctions = await getAuctionsByStatus(status);
    return {
      statusCode: 200,
      body: JSON.stringify(auctions),
    };
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }
}

export const handler = commonMiddleware(getAuctions).use(
  validator({
    inputSchema: getAuctionsSchema,
    ajvOptions: {
      useDefaults: true,
      strict: false,
    },
  })
);


