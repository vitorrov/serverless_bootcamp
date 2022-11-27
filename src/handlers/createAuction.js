async function createAuction(event, context) {
  const body = JSON.parse(event.body);
  const now = new Date();

  const auction = {
    title: body.title,
    status: 'OPEN',
    createdAt: now.toISOString(),
  };

  return {
    statusCode: 200,
    body: JSON.stringify(auction),
  };
}

export const handler = createAuction;


