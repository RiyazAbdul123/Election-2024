const electionContestants=[
    {
        candidateName:"Riyaz",
        votes:200000,
        region:"Machilipatnam"
    },
    {
        candidateName:"Anji",
        votes:100000,
        region:"Machilipatnam"
    },
    {
        candidateName:"Rakesh",
        votes:40000,
        region:"Machilipatnam"
    },
]


let caliculateVotes=(candidateName,votes,region)=>{
    return `${candidateName} received ${votes} votes in the ${region} region.`;
}

for (let each of electionContestants){
    console.log(caliculateVotes(each.candidateName,each.votes,each.region));
}