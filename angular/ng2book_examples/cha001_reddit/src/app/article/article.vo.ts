export class Article{

    constructor(
        public title:string,
        public link:string,
        public votes:number=0
    ){

    }

    upvote(){
        this.votes++;
    }

    downvote(){
        this.votes--;
        if(this.votes<0){
            this.votes = 0;
        }
    }

}