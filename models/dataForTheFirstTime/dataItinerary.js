import 'dotenv/config.js'
import '../../config/database.js'
import Itinerary from '../Itinerary.js'

const itineraries = [
    {
        _id: '5ca1b6a90193271048449001',
        name_itinerary: 'City Tour',
        name_user: 'Carlos Mendoza',
        photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
        img_itinerary:
            'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OQBPUDYBHNECVAHSYGAUPSORTM.jpg',
        price: '$ 50',
        duration: '2:00 hours',
        likes: 5,
        hashtags: '#city #route #visit',
    },
    {
        _id: '5ca1b6a90193271048449002',
        name_itinerary: 'Tour of a small town in Paisa',
        name_user: 'Camila Restrepo',
        photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
        img_itinerary:
            'https://lulocolombia.travel/wp-content/uploads/2020/05/Square-of-Pueblito-Paisa-Landscape-Medellin-Lulo-Colombia-Travel.jpg',
        price: '$ 80',
        duration: '1:00 hours',
        likes: 8,
        hashtags: '#smallTown #route #visit',
    },
    {
        _id: '5ca1b6a90193271048449003',
        name_itinerary: 'Temple And Shrine',
        name_user: 'Natsuki Suzuki',
        photo: 'https://i.pinimg.com/736x/d9/8f/80/d98f80c4b917e6ef6839845f11bd27d7.jpg',
        img_itinerary: 'https://photos.smugmug.com/photos/i-XsmxwQS/0/6de89f12/L/i-XsmxwQS-L.jpg',
        price: '$ 60',
        duration: '3: 00 hours',
        likes: 80,
        hashtags: '#templeshrine #japan #tour'
    },
    {
        _id: '5ca1b6a90193271048449004',
        name_itinerary: 'Climbing Or Visiting Mount Fuji',
        name_user: 'Manabu Yoshida',
        photo: 'https://www.japonalternativo.com/wp-content/uploads/2022/05/el-japones-mas-guapo-del-mundo-768x681.jpg',
        img_itinerary: 'https://photos.smugmug.com/photos/i-3v8JPVL/0/9f32b8d9/L/i-3v8JPVL-L.jpg',
        price: '$ 65',
        duration: '3: 20 hours',
        likes: 50,
        hashtags: '#mountfuji #japan #tour'
    },
    {
        _id: '5ca1b6a90193271048449005',
        name_itinerary: 'Tokyo Shopping',
        name_user: 'Osamu Yamagawa',
        photo: 'https://www.japonalternativo.com/wp-content/uploads/2022/05/cantantes-japoneses-bellos-bonitos.jpg',
        img_itinerary: 'https://photos.smugmug.com/photos/i-DFsPxSD/0/f534c30a/L/i-DFsPxSD-L.jpg',
        price: '$ 69',
        duration: '3: 30 hours',
        likes: 66,
        hashtags: '#shopping #japan #tour'
    },
    {
        _id: '5ca1b6a90193271048449006',
        name_itinerary: 'Japanese Bullet Train',
        name_user: 'Han Lue',
        photo: 'https://stateless-fueradefoco.storage.googleapis.com/wp-content/uploads/2021/06/30083924/how-is-han-alive-in-fast-and-furious-9_58gm.h720.jpg',
        img_itinerary:
            'https://cazloyd.com/wp-content/uploads/2023/09/Travelling-Through-Japan-By-Bullet-Train.jpeg.webp',
        price: '$ 50',
        duration: '2:00 hours',
        likes: 5,
        hashtags: '#bullet #train #visit',
    },
    {
        _id: '5ca1b6a90193271048449007',
        name_itinerary: 'Reikiavik Cultural Exploration',
        name_user: 'Guðbjörg Jónsdóttir',
        photo: 'https://www.esfri.eu/sites/default/files/styles/585x585/public/pictures/picture-1560-1688133471.jpg?itok=ERiRP9ao',
        img_itinerary:
            'https://files.adventure-life.com/11/06/63/iStock-484799460/1300x820.webp',
        price: '$ 70',
        duration: '4:00 hours',
        likes: 85,
        hashtags: '#ReykjavikCulture #IcelandicHistory #IcelandArt'
    },
    {
        _id: '5ca1b6a90193271048449008',
        name_itinerary: 'Golden Circle Tour',
        name_user: 'Einar Hákonsson',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwNSqfw0TZ0lBKxwlIlmxg6-lDRc1odOi0MQ&s',
        img_itinerary: 'https://www.findingtheuniverse.com/wp-content/uploads/2018/08/Rainbow-over-Gulfoss-Iceland_by_Laurence-Norah.jpg',
        price: '$ 150',
        duration: '3: 00 hours',
        likes: 92,
        hashtags: '#IcelandicCuisine #ReykjavikFoodTour #TasteOfIceland'
    },
    {
        _id: '5ca1b6a90193271048449009',
        name_itinerary: 'Taste of Reykjavik: Food Tour',
        name_user: 'Hanna Ólafsdóttir',
        photo: 'https://www.visir.is/i/83B7F86CBFA95F54F29B320F3BEE6672B04A3B9CB9E1B0A8BDA2FE4F94570634_713x0.jpg',
        img_itinerary: 'https://i0.wp.com/hiddeniceland.is/wp-content/uploads/2019/10/Reykjavi%CC%81k-Food-Walk-Wake-up-Reykajvi%CC%81k-Hidden-Iceland-3.jpg?fit=1440%2C960&ssl=1',
        price: '$ 120',
        duration: '5: 00 hours',
        likes: 78,
        hashtags: '#GoldenCircle #IcelandicCuisine #ReykjavikCulture'
    },
    {
        _id: '5ca1b6a90193271048449010',
        name_itinerary: 'Beijing Historical & Cultural Tour',
        name_user: 'Li Wei',
        photo: 'https://www.ucl.ac.uk/ioe/sites/ioe/files/styles/large_image/public/li_wei_outside_ioe_building.jpg?itok=B78YFOGS',
        img_itinerary: 'https://www.agoda.com/wp-content/uploads/2024/01/Featured-image-Forbidden-City-Beijing-1244x700.jpg',
        price: '$ 90',
        duration: '5: 00 hours',
        likes: 88,
        hashtags: '#BeijingHistory #ForbiddenCity #CulturalBeijing'
    },
    {
        _id: '5ca1b6a90193271048449011',
        name_itinerary: 'Great Wall of China Adventure',
        name_user: 'Zhao Ming',
        photo: 'https://i.mydramalist.com/QlEWW_5c.jpg',
        img_itinerary:
            'https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/02/02192048/great-wall-of-china-1600x900.jpeg',
        price: '$ 120',
        duration: '6:00 hours',
        likes: 95,
        hashtags: '#GreatWallOfChina #ChinaLandmarks #BeijingAdventure',
    },
    {
        _id: '5ca1b6a90193271048449012',
        name_itinerary: 'Moscow Historical & Cultural Tour',
        name_user: 'Anastasia Petrovna',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkaxPbWABqbMPTO9fxq942RwR0FdJS_ZY2Ug&s',
        img_itinerary:
            'https://www.russinfo.in/moscow/wp-content/uploads/2020/04/36-4.jpg',
        price: '$ 80',
        duration: '4:00 hours',
        likes: 92,
        hashtags: '#MoscowHistory #RedSquare #CulturalMoscow',
    },
    {
        _id: '5ca1b6a90193271048449013',
        name_itinerary: 'Moscow Kremlin & Red Square Exploration',
        name_user: 'Dmitry Ivanov',
        photo: 'https://i1.rgstatic.net/ii/profile.image/11431281122573440-1677429330893_Q512/Dmitry-Ivanov-6.jpg',
        img_itinerary: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-498208877_high.jpg',
        price: '$ 100',
        duration: '5: 00 hours',
        likes: 95,
        hashtags: '#KremlinTour #RedSquareMoscow #MoscowLandmarks'
    },
    {
        _id: '5ca1b6a90193271048449014',
        name_itinerary: 'Moscow Art & Architecture Tour',
        name_user: 'Olga Sokolova',
        photo: 'https://i1.rgstatic.net/ii/profile.image/883441948184579-1587640382712_Q512/Olga-Sokolova-2.jpg',
        img_itinerary: 'https://visitrussia.org.uk/wp-content/uploads/2023/12/Day4-scaled.jpg',
        price: '$ 85',
        duration: '4: 00 hours',
        likes: 85,
        hashtags: '#MoscowArt #RussianArchitecture #ArtLoversMoscow'
    },
    {
        _id: '5ca1b6a90193271048449015',
        name_itinerary: 'Downtown Discovery',
        name_user: 'John Thompson',
        photo: 'https://m.media-amazon.com/images/M/MV5BZWNiNDM4ZGEtNDAwMS00NWRkLTgxNWYtM2Y4MzQwMjhkNDMzXkEyXkFqcGc@._V1_.jpg',
        img_itinerary: 'https://kinderfoundation.org/wp-content/uploads/2023/09/34712035341_389851d958_o-1-scaled.jpg',
        price: '$ 120',
        duration: '6: 00 hours',
        likes: 85,
        hashtags: '#TorontoDowntown #UrbanExploration #CityVibes'
    },
    {
        _id: '5ca1b6a90193271048449016',
        name_itinerary: 'Cultural Heritage Tour',
        name_user: 'Emily Rodriguez',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTowzx02u7yhADmxZGgUuViTiH2pLIIMUig&s',
        img_itinerary:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d1/e1/3c/caption.jpg?w=500&h=400&s=1',
        price: '$ 150',
        duration: '8:00 hours',
        likes: 90,
        hashtags: '#TorontoCulture #HeritageWalk #HistoryTour',
    },
    {
        _id: '5ca1b6a90193271048449017',
        name_itinerary: 'Nature Escape',
        name_user: 'Michael Lee',
        photo: 'https://alignerco.com/cdn/shop/articles/Michael_Lee.png?v=1710506691',
        img_itinerary:
            'https://display.blogto.com/slide-shows/images/20230926-glen-stewart-ravine.jpg?quality=70&w=2184',
        price: '$ 100',
        duration: '5:00 hours',
        likes: 75,
        hashtags: '#TorontoNature #OutdoorAdventure #GreenSpaces',
    },
    {
        _id: '5ca1b6a90193271048449018',
        name_itinerary: 'Foodie Heaven',
        name_user: 'Samantha Patel',
        photo: 'https://www.weil.com/-/media/people/p/patel_samantha.jpg?h=255&w=255&hash=547EE2E6C92BC96B3C532A48B261BC99',
        img_itinerary: 'https://enwhmgiyknf.exactdn.com/wp-content/uploads/2024/07/438836681_899658578840181_3678738001587457313_n.jpeg?strip=all&lossy=1&ssl=1',
        price: '$ 130',
        duration: '7: 00 hours',
        likes: 75,
        hashtags: '#TorontoFood #GourmetTour #CulinaryJourney'
    },
    {
        _id: '5ca1b6a90193271048449019',
        name_itinerary: 'Classic Paris Landmarks',
        name_user: 'Claire Dupont',
        photo: 'https://media.licdn.com/dms/image/sync/v2/D4E27AQGxGlZC4ZxFLw/articleshare-shrink_800/articleshare-shrink_800/0/1728295005435?e=2147483647&v=beta&t=UC7F6yJkNdUVPhwlV9fw45fbQx1bjQk6xf8OI94ojqc',
        img_itinerary: 'https://frenchsidetravel.com/wp-content/uploads/2023/04/paris-city-view-shutterstock-jpg.webp',
        price: '$ 140',
        duration: '7: 00 hours',
        likes: 92,
        hashtags: '#ParisLandmarks #IconicSites #CityOfLights'
    },
    {
        _id: '5ca1b6a90193271048449020',
        name_itinerary: 'Artistic Paris',
        name_user: 'Antoine Martin',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGgYTkMiqm7PAcq4Nh2R6jSv7xi1d8PobNQ&s',
        img_itinerary: 'https://www.galerie-montmartre.com/wp-content/uploads/slider/cache/ee0dee95b7f8acba1632dcb7f9ab0416/LilleArtUp3-scaled.webp',
        price: '$ 160',
        duration: '8: 00 hours',
        likes: 88,
        hashtags: '#ParisArt #MuseumTour #CulturalExperience'
    },
    {
        _id: '5ca1b6a90193271048449021',
        name_itinerary: 'Gourmet Paris',
        name_user: 'Isabelle Moreau',
        photo: 'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/VIDEO-Isabelle-Moreau-premieres-confidences-sur-son-arrivee-a-I-tele.jpg',
        img_itinerary:
            'https://cdn.sortiraparis.com/images/80/88879/508675-le-dalloyau-cafe-au-galeries-lafayette-gourmet.jpg',
        price: '$ 180',
        duration: '6:00 hours',
        likes: 94,
        hashtags: '#ParisFood #GourmetExperience #CulinaryDelights',
    },
    {
        _id: '5ca1b6a90193271048449022',
        name_itinerary: 'Hidden Gems of Paris',
        name_user: 'Jean-Luc Rousseau',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsROaVBgmpga-9a2_SCQGrAG0nURqt8sEnKw&s',
        img_itinerary:
            'https://adventuresbylana.com/wp-content/uploads/2024/06/Rue-Cremieux-2-1024x683.jpg.webp',
        price: '$ 120',
        duration: '5:00 hours',
        likes: 85,
        hashtags: '#HiddenParis #OffTheBeatenPath #SecretSpots',
    },
    {
        _id: '5ca1b6a90193271048449023',
        name_itinerary: 'Manhattan Highlights',
        name_user: 'Anthony Edward Stark',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg',
        img_itinerary: 'https://btsq.com/wp-content/uploads/2023/12/Half-Day-Manhattan-Highlights-NYC-Private-Tour-2.jpg',
        price: '$ 150',
        duration: '8: 00 hours',
        likes: 96,
        hashtags: '#ManhattanTour #NYCViews #CityHighlights'
    },
    {
        _id: '5ca1b6a90193271048449024',
        name_itinerary: 'Brooklyn Adventure',
        name_user: 'Natalia Alianovna Romanova',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8WSWIIKVr3mYRlT0NzZuGrAmve5CR0fZTQ&s',
        img_itinerary: 'https://www.vacacionesnuevayork.com/wp-content/uploads/2024/06/que-ver-brooklyn.jpg',
        price: '$ 120',
        duration: '4: 00 hours',
        likes: 50,
        hashtags: '#BrooklynTour #NYCAdventure #LocalSpots'
    },
    {
        _id: '5ca1b6a90193271048449025',
        name_itinerary: 'Cultural New York',
        name_user: 'Steven Grant Rogers',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdm3OmMSL2nFyjpGdMvd_Sj0OQEHozK_PXyA&s',
        img_itinerary: 'https://www.nyccharterbuscompany.com/blog/wp-content/uploads/2019/07/fall-winter-cultural-festivals-nyc-charter-bus-company.jpg',
        price: '$ 130',
        duration: '6: 30 hours',
        likes: 90,
        hashtags: '#NYCulture #MuseumTour #ArtAndHistory'
    },
    {
        _id: '5ca1b6a90193271048449026',
        name_itinerary: "Food Lover's NYC",
        name_user: 'Nick Fury',
        photo: 'https://boo-prod.b-cdn.net/database/profiles/1697885381736cb27cc0c67843a5f3b4e6c2271e1f0d0.jpg?class=sm',
        img_itinerary:
            'https://images.squarespace-cdn.com/content/v1/5533054fe4b09627e6f4c6c1/1548362344006-V4U1JYSXUY4NGNLA53DJ/us+vb+750.jpg',
        price: '$ 140',
        duration: '2:00 hours',
        likes: 95,
        hashtags: '#NYCFood #CulinaryJourney #GourmetTour',
    },
    {
        _id: '5ca1b6a90193271048449027',
        name_itinerary: 'Hollywood Experience',
        name_user: 'Nicolas Cage',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg',
        img_itinerary:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/11/7d/e5/the-hollywood-experience.jpg?w=1200&h=-1&s=1',
        price: '$ 160',
        duration: '8:00 hours',
        likes: 99,
        hashtags: '#HollywoodTour #StarSightings #LAExperience',
    },
    {
        _id: '5ca1b6a90193271048449028',
        name_itinerary: 'Beach Day in LA',
        name_user: 'Dwayne Johnson',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpHGPYoJ409uVnQ5f6QMO9jkP4HkJHAgHDw&s',
        img_itinerary: 'https://lp-cms-production.imgix.net/2024-03/GettyRF638340372.jpg?w=1440&h=810&fit=crop&auto=format&q=75',
        price: '$ 120',
        duration: '9: 00 hours',
        likes: 80,
        hashtags: '#LABeach #SunAndSand #CoastalAdventure'
    },
    {
        _id: '5ca1b6a90193271048449029',
        name_itinerary: 'Cultural Downtown LA',
        name_user: 'Jack Sparrow',
        photo: 'https://media.vandalsports.com/i/640x360/8-2023/202382394811_1.jpg',
        img_itinerary: 'https://www.discoverlosangeles.com/sites/default/files/images/2024-01/LA%20LIVE%20Peacock%20Place.jpeg',
        price: '$ 140',
        duration: '7: 30 hours',
        likes: 50,
        hashtags: '#DowntownLA #CulturalTour #ArtAndHistory'
    },
    {
        _id: '5ca1b6a90193271048449030',
        name_itinerary: 'Foodie Paradise',
        name_user: 'Mrs Doubtfire',
        photo: 'https://faroutmagazine.co.uk/static/uploads/1/2021/12/Mrs-Doubtfire.jpg',
        img_itinerary: 'https://02e65995e9121cbd9a33.cdn6.editmysite.com/uploads/b/02e65995e9121cbd9a330d768d61eef0e7ae08ac6507ab0371d204e7e601586a/truck_paramount3_1607411290.jpg?width=2400&optimize=medium&height=480&fit=cover&dpr=2.625',
        price: '$ 130',
        duration: '3: 30 hours',
        likes: 66,
        hashtags: '#LAFood #GourmetEats #CulinaryTour'
    }
]

Itinerary.insertMany(itineraries)
