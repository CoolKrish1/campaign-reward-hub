export default async function handler(req, res) {
  const { click_id, event, payout } = req.query;

  console.log({
    click_id,
    event,
    payout
  });

  return res.status(200).json({
    success: true,
    click_id,
    event,
    payout
  });
}
