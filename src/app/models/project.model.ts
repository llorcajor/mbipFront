import { Category } from "./category.model";

export class Project{
    public id: number;
    public name: string;
    public tag: string;
    public description: string;
    public imagePath: string;
    public category: Category;
    public userId: number;
    public createdAt: string;
    

    constructor(id:number, name:string, tag:string, desc:string, imagePath:string, category: Category, userId: number, createdAt: string){
        this.id= id;
        this.name = name;
        this.tag = tag;
        this.description= desc;
        this.imagePath = imagePath;
        this.category = category;
        this.userId = userId;
        this.createdAt = createdAt;
        
    }
}