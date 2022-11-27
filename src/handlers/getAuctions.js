import createError from 'http-errors';
import commonMiddleware from '../lib/commonMiddleware';
import { getAuctionsByStatus } from '../lib/getAuctionsByStatus';

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

export const handler = commonMiddleware(getAuctions);


