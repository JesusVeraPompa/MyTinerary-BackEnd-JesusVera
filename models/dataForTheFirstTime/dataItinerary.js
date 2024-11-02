import 'dotenv/config.js'
import '../../config/database.js'
import Itinerary from '../Itinerary.js'

const itineraries = [
    {
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
]

Itinerary.insertMany(itineraries)
