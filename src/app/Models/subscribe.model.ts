export class Subscribe {

    name: string;
    email: string;
    sendNewInfo: boolean;
    id: string;
    
    constructor(name: string,email: string,sendNewInfo: boolean = true,id?: string ) {
            this.name = name;
            this.email = email;
            this.sendNewInfo = sendNewInfo;
            this.id = id || new Date().getTime().toString();
        
    
    }
    }

   