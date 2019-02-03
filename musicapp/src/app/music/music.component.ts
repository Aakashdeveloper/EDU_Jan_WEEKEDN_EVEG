import { Component, OnInit } from '@angular/core';
import { Ialbums, Iartists, Imusic } from './music.model';
import { MusicService } from './music.service';

import { Globals } from './global';




@Component({
    selector: 'app-song',
    templateUrl: './music.component.html',
   


})

export class MusicComponent implements OnInit {
                    title: String = '**** My Music ****';               
                    showImage: boolean = false;
                    music:Imusic[]; 
                    selectedArtist:Iartists;
                    album:Ialbums[];
                    selectAlbum:String="";
                    selectImg:String="welcome";
                    albumImage:String;
                                 

constructor(private _musicService:MusicService,
            private  globals:Globals){}

                                                 
ngOnInit():void{
    this._musicService.getMusic().subscribe((data) => this.music = data)  
    }
    
    
    display(name:String):void{ 
    var img;
    var src;
    var img1;
       var test="";
        var i=0;
        this.music.forEach(function(item){
          // Object.keys(item).forEach(function(key){
                 item.artists.forEach(function(item1){
                    Object.keys(item1).forEach(function(key1){        
                if(key1=="name"){
                     if(item1[key1] == name){
                       i=1;
                       img=item1.cover;
                     }
                }
                     if(key1== "albums" && i==1){
                        //this.albums.forEach
                        //Object.keys(item3).forEach(function(key2){
                            item1[key1].forEach(function(item3){
                                Object.keys(item3).forEach(function(key2){
                                    //this.selectAlbum=this.selectAlbum+`<button>hi</button>`
                                   if (key2 == "title"){
                                         //var selectAlbum;
                                        //console.log(item3);
                                       // img1=item3.cover;
                                       img1="<img src='/assets/Images/albums/"+item3.cover+".jpg' width=70px height=70px  class=img-circle />"
                                       //console.log(img1)
                                      test="<div><tr ><td>"+img1+"</td></tr>&nbsp;<tr><td>"+item3.title+"</td></tr></div>" +test;
                                    
                                     
                                      // img=item3.cover +img;                     
                                     //test=<img src="./assets/Images/albums/"+img+".jpg" />    
                                   //console.log(key2 + ":" + item3[key2]) ;
                                  // return item3[key2];
                                    }
                                })
                            })
                            i=0;
                        //img[i]=test
                        }
                    }) 
                 })  
                
            })
            this.selectAlbum =test
            this.selectImg=img;
            //this.albumImage=img1;
           // console.log(this.selectImg)
            //this.selectImg=img;
        }


        // Selected(album:Iartists): void {

        //     console.log(album);
        //     //this.showDiv = artist.showAlbums;
        //     //this.selectedArtist = album;
        //     //this.selectedAlbumList = artist.albums;
        //   }  
    
    }      
            
        

        // this.artist.forEach(function(item1){
        //     Object.keys(item1).forEach(function(key){
        //         console.log(key + ":" + item1[key]);
        // })
        //     });


        
                // for( var album in music.artists[i].albums){
                //     console.log(music.artists[i]);
                //     console.log(i)
                //     console.log(music.artists[i].albums[album]);
                // }
           
            //for ( var artists in music ){
               // if(artist=="artists" ) {
                  // for ( var album in music.artists){

                 //   console.log("test" +artists[0]);
                  // }) 
        
           // }           // e.artists.forEach(function(e.artists,p){
              //      console.log(artists[p]);
             // });
   // });
   // }

        // display(name:String):void{
    //    // console.log(name);
    //     console.log(this.music.keys());
    //     this.music.forEach(function(e,i){
    //         console.log(i);
    //         for(var key in e){
    //             //console.log(key + ':#######' + e[key] ); 
    //             //if(key=="artists"){
    //              //   console.log(key + ':#######' + e[key] ); 
    //              //   ()e[key]
    //             }
                
    //         }
    //      // });
    //   //  this.music.forEach(element => {
    //      //   var artists1 = element.artists
    //      //   console.log("too" +artists1);
           
    //     //artists1.forEach(element2 => {
    //     //     console.log("three" +element2);
    //       // });
    //    // });


    

                                                    
                                                   // onSelect(music:Imusic[]):void{
                                                    //    console.log(music);
                                                      //  this.selectAlbum = music;  
                                                        
                                                        

                                                

                                               // showAlbums(artist:String): void {
                                              //   this.showImage = !this.showImage;
                                               //  console.log("hi" +artist);
                                               //  console.log("test" +this.showImage);

                                                // const myArray =JSON.stringify(this.music);
                                                 //console.log("output" +myArray);
                                                // JSON.parse(myArray,(Key,Value)=>{
                                                /*    if((Value=='String') && (Key='artist')){
                                                            console.log("this is key" +Key);
                                                        return Value.toUpperCase();
                                                    }
                                                    return Value;
                                                 });*/
                                             
                                                
                                                



                                            
    
    
    
    
    
    


   // showAlbums(): void {
   //     this.showImage = !this.showImage;
   // }
//}




              /*  music: Imusic[] =[
                    {
                        '_id':'5ab17276f36d282750913a51',
                        'artists':[
                                    {
                                                    'id':1,
                                                    'name':'Jimi Hendrix',
                                                    'cover':'jimi_hendrix',
                                                    'bio':'James Marshall Jimi Hendrix was an American rock guitarist, singer, and songwriter. ',
                                                    'albums':[
                                                            {
                                                                'albumId':'a1',
                                                                'title':'Electric Ladyland',
                                                                'year':1968,
                                                                'cover':'electric-ladyland',
                                                                'price':20
                                                             },
                                                             {
                                                                 'albumId':'a2',
                                                                 'title':'Experience',
                                                                 'year':1971,
                                                                 'cover':'experienced',
                                                                 'price':25
                                                            }],

                                                            'genre':'rock,blues'
                                                            
                                     },
                                     {
                                        'id':5,
                                        'name':'Madonna',
                                               'cover':'madonna',
                                                'bio':'Madonna Louise Ciccone is an American singer, songwriter, actress, and businesswoman.',
                                                'albums':[
                                                            {
                                                                'albumId':'b1',
                                                                'title':'Like a Virgin',
                                                                'year':1984,
                                                                'cover':'like_a_virgin',
                                                                'price':20
                                                            },
                                                            {
                                                                'albumId':'a2',
                                                                'title':'Experience',
                                                                'year':1971,
                                                                'cover':'experienced',
                                                                'price':25
                                                          }],

                                                'genre':'rock,blues'
                                                
                         }
                                ]
                    }
                ] */