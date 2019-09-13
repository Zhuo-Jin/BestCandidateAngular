export interface IJob {
    jobId:number,
    name:string,
    company:string,
    skills:string

}



export interface ICandidate {
    candidateId:number,
    name:string,
    skillTags:string,
    score:number,
    matched:string[]
}