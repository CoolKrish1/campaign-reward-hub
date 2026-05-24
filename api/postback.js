export default async function handler(req,res){

const trackingId=req.query.trackingId;
const payout=req.query.payout;
const status=req.query.status;

if(!trackingId){
return res.status(400).json({
success:false,
message:"trackingId missing"
});
}

return res.status(200).json({
success:true,
trackingId,
payout,
status
});

}
