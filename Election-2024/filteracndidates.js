const votes=[{
    candidateName:"Riyaz",
    votes:20
},
{
    candidateName:"Rakesh",
    votes:30
},
{
    candidateName:"Rahul",
    votes:40
}
];
let threshold=20;
const filtercandidates=(candidateVotes,thresholdVotes)=>candidateVotes.filter(candidates=>candidates.votes>threshold).map(eachCandidate=>eachCandidate.candidateName)
console.log(filtercandidates(votes,threshold))

