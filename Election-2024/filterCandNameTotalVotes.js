const analyzeElections=(threshold,...theArgs)=>{
    const filteredCandidates=theArgs.filter(eachCandidate=>eachCandidate.votes>threshold);
    console.log(filteredCandidates);

    const totalVotes=(filteredCandidatesData)=>{
        if(filteredCandidatesData.length===0){
            return 0
        }else{
            return filteredCandidatesData[0].votes +totalVotes(filteredCandidatesData.slice(1));
        }
    }
    let res1=totalVotes(filteredCandidates);  
    console.log(res1);

    const candidateNames=filteredCandidates.map(names=>names.name);
    console.log(candidateNames);

    return {
        res1,candidateNames
    };
};

const res=analyzeElections(
    30,
    {
        name:"Riyaz",
        votes:50
    },
    {
        name:"Rakesh",
        votes:20
    },
    {
        name:"Rahul",
        votes:30
    },
    {
        name:"Ramesh",
        votes:60
    },
);
console.log(res);