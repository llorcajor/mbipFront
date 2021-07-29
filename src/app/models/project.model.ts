import { Category } from "./category.model";
import { User } from "./user.model";

export class Project{
    public id: number;
    public name: string;
    public description: string;
    public imageUrl: string;
    public category: Category;
    public user: User;
    public createdAt: string;
    

    constructor(id:number, name:string, desc:string, imagePath:string, category: Category, userId: User, createdAt: string){
        this.id= id;
        this.name = name;
        this.description= desc;
        this.imageUrl = imagePath;
        this.category = category;
        this.user = userId;
        this.createdAt = createdAt;
        
    }
}