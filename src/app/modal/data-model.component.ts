export class DataModel{
    id: any;
    type: any;
    text: string;
    constructor(id){
        this.id = id;
        this.type = 'default';
        this.text = '';
    }
}