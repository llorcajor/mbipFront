export class User{
    gettoken: string | undefined;
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public email: string,
        public image: string,
        public password: string,
        public role: string,
        public createdAt: string
    ){
        
    }
}