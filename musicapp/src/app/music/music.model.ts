/* export interface Imusic{
_id:String;
 artists:{
        id:Number;
        name:String;
        cover:String;
        bio:String;  
            albums:{
                    albumId:String;
                    title:String;
                    year:Number;
                    cover:String;
                    price:Number;
                    };

        gener:String;
    };
 } */



/*export interface Imusic{
    _id:String;
    artists:Array<{
        id:Number,
        name:String,
        cover:String,
        bio:String,   
        albums:Array<{
        albumId:String,
        title:String,
        year:Number,
        cover:String,
        price:Number
    }>;
}>;
}  */



export interface Imusic{
    _id:String,
    artists:Iartists[];
}

export interface Iartists{
    id:Number,
    name:String,
    cover:String,
    bio:String, 
    genre:String,
    albums:Ialbums[];
}

export interface Ialbums{
    albumId:String,
    title:String,
    year:Number,
    cover:String,
    price:Number
}