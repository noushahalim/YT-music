import { Injectable } from "@angular/core";
import { title } from "process";

@Injectable({
    providedIn:'root'
})

export class MusicService{
    indiasBiggesthits=[
        {
            imagePath:'../../assets/images/songs/image032.jpg',
            title:'Bollywood Hitlist',
            secTitle:'Arjith Sing, Shilpa Rao'
        },
        {
            imagePath:'../../assets/images/songs/image103.jpg',
            title:'Uncut Bollywood',
            secTitle:'Pritam, Sachet ...'
        },
        {
            imagePath:'../../assets/images/songs/image007.jpg',
            title:'Tollywood Hitlist',
            secTitle:'Thaman s, Anirudh..'
        },
        {
            imagePath:'../../assets/images/songs/image081.jpg',
            title:'Punjab Fire',
            secTitle:'Karan Aujula, Shub, Ikky ..'
        },
        {
            imagePath:'../../assets/images/songs/image102.jpg',
            title:'Haryanvi Hitlist',
            secTitle:'Masoom Sharma, Shiva Choudary,..'
        },
        {
            imagePath:'../../assets/images/songs/image034.jpg',
            title:'Bollywood Dance Hitlist',
            secTitle:'Arjith Sing, Shilpa Rao,..'
        },
        {
            imagePath:'../../assets/images/songs/image058.jpg',
            title:'Tollywood Romance Hotlist',
            secTitle:'Sid sriam, Anurag Kulkari,..'
        },
        {
            imagePath:'../../assets/images/songs/image075.jpg',
            title:'Mollywood Hitlist',
            secTitle:'Sushin Shyam, Jakes Bejoy'
        },
        {
            imagePath:'../../assets/images/songs/image122.jpg',
            title:'Tollywood Dance Hitlist',
            secTitle:'Thaman, S Ram, Miriyala..'
        },
        {
            imagePath:'../../assets/images/songs/image024.jpg',
            title:'Sandalwood Hitlist',
            secTitle:'Aishwarya Rangarajan..'
        }
    ]

    RecomentedMusicVideos=[
        {
            imagePath:'../../assets/images/songs/image009.jpg',
            title:'Kaun Tujhe ("M.S.Dhoni)',
            secTitle:'Palak Munchal'
        },
        {
            imagePath:'../../assets/images/songs/image.jpg',
            title:'Phir Bhi Tumko Chaahunga',
            secTitle:'Shasha Tirupati, mithoon..'
        },
        {
            imagePath:'../../assets/images/songs/image018.jpg',
            title:'Shree Hanuman Chalisa',
            secTitle:'Hariharan'
        },
        {
            imagePath:'../../assets/images/songs/image017.jpg',
            title:'Halki Halki Si',
            secTitle:'Saaj Bhatt, Sanjeev..'
        },
        {
            imagePath:'../../assets/images/songs/image015.jpg',
            title:'Meri Jaan',
            secTitle:'Madhuleena Das'
        },
        {
            imagePath:'../../assets/images/songs/image013.jpg',
            title:'One Love',
            secTitle:'Shubh'
        },
        {
            imagePath:'../../assets/images/songs/image011.jpg',
            title:'Soulmate',
            secTitle:'Badshah & Arjith..'
        },
        {
            imagePath:'../../assets/images/songs/image014.jpg',
            title:'Zara Zara',
            secTitle:'JalRaj'
        },
        {
            imagePath:'../../assets/images/songs/image012.jpg',
            title:'Tum Se',
            secTitle:'Sachin Jiagar'
        },
        {
            imagePath:'../../assets/images/songs/image016.jpg',
            title:'Apne Bana Le',
            secTitle:'Amitabh Bhattacharya'
        }
    ]

    InTheZone=[
        {
            imagePath:'../../assets/images/songs/image123.jpg',
            title:'Instrumental Arabic',
            secTitle:'Omar Kairat..'
        },
        {
            imagePath:'../../assets/images/songs/image088.jpg',
            title:'Mellow Solo Piano',
            secTitle:'Cameron Segal, Goetz..'
        },
        {
            imagePath:'../../assets/images/songs/image069.jpg',
            title:'Classiacl Focus',
            secTitle:'Johann Sebastian'
        },
        {
            imagePath:'../../assets/images/songs/image040.jpg',
            title:'Jazz Focus',
            secTitle:'Triosence, Joey,..'
        },
        {
            imagePath:'../../assets/images/songs/image096.jpg',
            title:'Orieantal Trap',
            secTitle:'Bo, Serhat'
        },
        {
            imagePath:'../../assets/images/songs/image004.jpg',
            title:'Soothing Classical Harp',
            secTitle:'Yolanda Kodonassis..'
        },
        {
            imagePath:'../../assets/images/songs/image060.jpg',
            title:'Cinematic Ambience',
            secTitle:'Hanse Zimmer'
        },
        {
            imagePath:'../../assets/images/songs/image093.jpg',
            title:'Left Barin, Right Beat',
            secTitle:'Floating Points,..'
        },
        {
            imagePath:'../../assets/images/songs/image039.jpg',
            title:'Classical Meditation',
            secTitle:'Peter Gregson,.'
        },
        {
            imagePath:'../../assets/images/songs/image055.jpg',
            title:'Classical Solo Piano',
            secTitle:'Daniel Barenboim,..'
        }
    ]

    qickPicks=[
        {
            imagePath:'../../assets/images/songs/image084.jpg',
            title:'Apna Bana Le',
            secTitle:'Arjith Sing & Apna...'
        },
        {
            imagePath:'../../assets/images/songs/image079.jpg',
            title:'Teri Baaton Mein Aisa',
            secTitle:'Ragav, Tanis'
        },
        {
            imagePath:'../../assets/images/songs/image115.jpg',
            title:'Poolamme Pilla',
            secTitle:'GowraHari . Poolamme..'
        },
        {
            imagePath:'../../assets/images/songs/image072.jpg',
            title:'Heeriye',
            secTitle:'Jasleen Royal & Ar. Heer..'
        },
        {
            imagePath:'../../assets/images/songs/image100.jpg',
            title:'Kahani Suno',
            secTitle:'Kaifi Khalil. Kahani ..'
        },
        {
            imagePath:'../../assets/images/songs/image080.jpg',
            title:'Tum Se',
            secTitle:'Varun Jain..'
        },
        {
            imagePath:'../../assets/images/songs/image037.jpg',
            title:'Dil Jhoom',
            secTitle:'Mithoon & ..'
        },
        {
            imagePath:'../../assets/images/songs/image035.jpg',
            title:'Pal',
            secTitle:'Javad - Mohsin, Arjith'
        },
        {
            imagePath:'../../assets/images/songs/image118.jpg',
            title:'Afreen Afreen',
            secTitle:'Rahat Fateh..'
        },
        {
            imagePath:'../../assets/images/songs/image119.jpg',
            title:'Pehle Bhi Main',
            secTitle:'Vishal Mish'
        },
        {
            imagePath:'../../assets/images/songs/image116.jpg',
            title:'Ye Tune Kya Kiya',
            secTitle:'Zayan Ye Tune'
        },
        {
            imagePath:'../../assets/images/songs/image074.jpg',
            title:'Magic | Coke Studio',
            secTitle:'Sijith Dosanjh ..'
        },
        {
            imagePath:'../../assets/images/songs/image109.jpg',
            title:'Chittiyan Kalaiyaan',
            secTitle:'Meet Bros Anjan'
        },
        {
            imagePath:'../../assets/images/songs/image053.jpg',
            title:'Tu hai kahan',
            secTitle:'AUR. Tu hai kahan'
        },
        {
            imagePath:'../../assets/images/songs/image070.jpg',
            title:'Chandri',
            secTitle:'Sachet Tandon, p..'
        },
        {
            imagePath:'../../assets/images/songs/image117.jpg',
            title:'One Love',
            secTitle:'Shubh One Love'
        },
        {
            imagePath:'../../assets/images/songs/image010.jpg',
            title:'Saware- Arjit Sing',
            secTitle:'audio and sky'
        },
        {
            imagePath:'../../assets/images/songs/image076.jpg',
            title:'shree Hanuman Chalisa',
            secTitle:'Hariharan'
        },
        {
            imagePath:'../../assets/images/songs/image063.jpg',
            title:'Tere Vaaste',
            secTitle:'Varun Jain'
        },
        {
            imagePath:'../../assets/images/songs/image098.jpg',
            title:'Premika Ne Pyar',
            secTitle:'S.p Balasu'
        }
    ]

    Charts=[
        {
            imagePath:'../../assets/images/songs/image108.jpg',
            title:'Top 100 Music Videos India',
            secTitle:'Chart . YouTube'
        },
        {
            imagePath:'../../assets/images/songs/image113.jpg',
            title:'Trending 20 India',
            secTitle:'Chart . YouTube'
        },
        {
            imagePath:'../../assets/images/songs/image005.jpg',
            title:'Top 100 Music Videos Global',
            secTitle:'Chart . YouTube'
        }
    ]
    
}


// indiasBiggesthits=[
//     {
//         imagePath:'../../assets/images/songs/image.jpg',
//         title:'',
//         secTitle:''
//     },
//     {
//         imagePath:'../../assets/images/songs/image.jpg',
//         title:'',
//         secTitle:''
//     },
//     {
//         imagePath:'../../assets/images/songs/image.jpg',
//         title:'',
//         secTitle:''
//     },
//     {
//         imagePath:'../../assets/images/songs/image.jpg',
//         title:'',
//         secTitle:''
//     },
//     {
//         imagePath:'../../assets/images/songs/image.jpg',
//         title:'',
//         secTitle:''
//     },
//     {
//         imagePath:'../../assets/images/songs/image.jpg',
//         title:'',
//         secTitle:''
//     },
//     {
//         imagePath:'../../assets/images/songs/image.jpg',
//         title:'',
//         secTitle:''
//     },
//     {
//         imagePath:'../../assets/images/songs/image.jpg',
//         title:'',
//         secTitle:''
//     },
//     {
//         imagePath:'../../assets/images/songs/image.jpg',
//         title:'',
//         secTitle:''
//     },
//     {
//         imagePath:'../../assets/images/songs/image.jpg',
//         title:'',
//         secTitle:''
//     }
// ]