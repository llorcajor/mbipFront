export class Category{
    public id: number;
    public name: string;
    public color: string;
    public createdAt: string;
    

    constructor(id:number, name:string, color:string,  createdAt: string){
        this.id= id;
        this.name = name;
        this.color = color;
        this.createdAt = createdAt;
        
    }
}