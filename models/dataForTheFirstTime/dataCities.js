import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js'

const cities = [
    {
        name: 'Moscow',
        photo: 'https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg',
        photo2: 'https://guiaen3dias.com/wp-content/uploads/2019/03/moscu-en-3-dias-1.jpg',
        country: 'Russia',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png',
        continent: 'Europe and Asia',
        description:
            'Moscow is the capital and the most populous federal entity of Russia. The city is a major political, economic, cultural and scientific centre of Russia and the continent. Moscow is the northernmost megacity on Earth and the most populous city in Europe. Its population is approximately 13,104,177 inhabitants. By virtue of its territorial expansion to the southwest of the Moscow Oblast, on July 1, 2012 the capital increased its area by 2.5 times, from about 1,000 km² to 2,500 km², and gained an additional population of 250,000 inhabitants.',
        population: 13104177,
        language: 'Russian',
        currency: 'Ruble',
        img_currency:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/5000_rubles_obverse_2023.jpg/800px-5000_rubles_obverse_2023.jpg',
        time_zone: 'Moscow time, UTC+03:00 and Europe/Moscow',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Coat_of_arms_of_Moscow.svg',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Moscow%2C_Russia.svg',
        itineraries: ["5ca1b6a90193271048449012", "5ca1b6a90193271048449013", "5ca1b6a90193271048449014"],
    },
    {
        name: 'Saint Petersburg',
        photo: 'https://www.civitatis.com/blog/wp-content/uploads/2019/11/blog-que-ver-san-petersburgo.jpg',
        photo2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Spb_06-2017_img06_Trinity_Cathedral.jpg/1280px-Spb_06-2017_img06_Trinity_Cathedral.jpg',
        country: 'Russia',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png',
        continent: 'Europe and Asia',
        description:
            'Saint Petersburg is a Russian city located at the mouth of the Neva River in the Gulf of Finland. With approximately 5,383,890 inhabitants, it is the second most populous and important city in the country, only surpassed by the capital, Moscow. It is also known as the "Venice of the North" due to its numerous canals. It is considered one of the most beautiful capitals in Europe, and one of the cultural capitals of Europe and the world (opera, ballet, music, museums, Imperial Academy of Arts, among others).',
        population: 5383890,
        language: 'Russian',
        currency: 'Ruble',
        img_currency:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/5000_rubles_obverse_2023.jpg/800px-5000_rubles_obverse_2023.jpg',
        time_zone: 'Moscow time, UTC+03:00 and Europe/Moscow',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Coat_of_arms_of_Saint_Petersburg_%282003%29.svg',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Saint_Petersburg.svg',
        itineraries: [],
    },
    {
        name: 'Shanghai',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg/1200px-Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg',
        photo2: 'https://comercial.cronosmedia.glr.pe/original/2024/06/24/66796a3301ac673a3c76397d.jpg',
        country: 'China',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1280px-Flag_of_the_People%27s_Republic_of_China.svg.png',
        continent: 'Asia',
        description:
            'Shanghai is the most populous city in China and one of the most populous in the world. Administratively, it is one of the four central-level municipalities that, together with the twenty-two provinces, five autonomous regions and two special administrative regions, make up the People´s Republic of China. It has more than 24 million inhabitants. Located in eastern China, Shanghai lies in the Yangtze River Delta, centered on the coast of the East China Sea and is administered at the highest level with the category of directly controlled municipality.',
        population: 24152700,
        language: 'Mandarin Chinese',
        currency: 'Yuan',
        img_currency: 'https://www.thechinaguide.com/uploads/edt/2/671c3ef2a0-100rmb.jpg',
        time_zone: 'China Standard Time (UTC+08:00) Beijing, Chongqing, Hong Kong SAR, Urumqi',
        ensign: 'not found',
        flag_cities: 'not found',
        itineraries: [],
    },
    {
        name: 'Beijing',
        photo: 'https://static.dezeen.com/uploads/2016/02/CCTV-Headquarters-by-OMA_iwan-baan_dezeen_936_sq.jpg',
        photo2: 'https://www.bbh.com/us/en/bbh-who-we-are/office-locations/beijing-office/_jcr_content/root/container/container/teaser_1812278513.dnaimg.90.1024.rectangle_jpg.jpeg/1612284864902/gettyimages-535914395-beijing-cover.jpeg',
        country: 'China',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1280px-Flag_of_the_People%27s_Republic_of_China.svg.png',
        continent: 'Asia',
        description:
            'Beijing is the capital of the People´s Republic of China and one of the most populous cities in the world with 21,890,000 inhabitants in 2020. It is also, along with Shanghai, Tianjin and Chongqing, one of the four municipalities of the country.',
        population: 21893095,
        language: 'Mandarin Chinese',
        currency: 'Yuan',
        img_currency: 'https://www.thechinaguide.com/uploads/edt/2/671c3ef2a0-100rmb.jpg',
        time_zone: 'China Standard Time (UTC+08:00) Beijing, Chongqing, Hong Kong SAR, Urumqi',
        ensign: 'not found',
        flag_cities: 'not found',
        itineraries: ["5ca1b6a90193271048449010", "5ca1b6a90193271048449011"],
    },
    {
        name: 'New York',
        photo: 'https://dam.ngenespanol.com/wp-content/uploads/2021/05/cuanto-cuesta-viajar-a-nueva-york-770x513.jpg',
        photo2: 'https://mbmarcobeteta.com/wp-content/uploads/2021/02/shutterstock_248799484-scaled.jpg',
        country: 'EE.UU.',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png',
        continent: 'North America',
        description:
            'New York City, officially called New York City (New York City, NYC), is the most populous city in the United States and one of the most densely populated in the world, with an urban area of ​​24 million inhabitants. Since the late 19th century, it has been one of the centers of world politics and economy, housing the headquarters of the United Nations and numerous companies and financial institutions of global importance. New York exerts a global influence in the media, politics, education, architecture, entertainment, arts and fashion. For all these reasons, it is considered one of the most globalized cities on the planet, with great cultural diversity.',
        population: 8804109,
        language: 'American English',
        currency: 'Dollar',
        img_currency:
            'https://www.shutterstock.com/image-vector/vector-obverse-high-poly-pixel-600nw-2447906059.jpg',
        time_zone: 'Pacific Standard Time (UTC-08:00) Pacific Time (US and Canada)',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Seal_of_New_York_City.svg',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_New_York_City.svg',
        itineraries: [,"5ca1b6a90193271048449023", "5ca1b6a90193271048449024", "5ca1b6a90193271048449025", "5ca1b6a90193271048449026"],
    },
    {
        name: 'Los Angeles',
        photo: 'https://hips.hearstapps.com/hmg-prod/images/elle-los-angeles02-1559906859.jpg',
        photo2: 'https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg',
        country: 'EE.UU.',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png',
        continent: 'North America',
        description:
            'Los Angeles, officially the City of Los Angeles (in English: City of Los Angeles) and abbreviated LA, or L.A., is the most populous city in the state of California and the second most populous city in the United States, after New York City. It has, according to the 2020 Census, a population of approximately 3,983,540 inhabitants, experiencing a growth of 4.9% in ten years. It is located in Southern California and covers an area of ​​1,215 km². The city is the center of the Los Angeles-Long Beach-Santa Ana Metropolitan Statistical Area and Greater Los Angeles, which according to the 2010 census had a population of thirteen and eighteen million people, respectively. It is therefore one of the largest metropolitan areas in the world and the second in the United States. The city is also the seat of Los Angeles County, one of the most populous and ethnically diverse counties in the country.',
        population: 3983540,
        language: 'American English',
        currency: 'Dollar',
        img_currency:
            'https://www.shutterstock.com/image-vector/vector-obverse-high-poly-pixel-600nw-2447906059.jpg',
        time_zone: 'Pacific Standard Time (UTC-08:00) Pacific Time (US and Canada)',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Seal_of_Los_Angeles.svg/600px-Seal_of_Los_Angeles.svg.png',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Los_Angeles%2C_California.svg/800px-Flag_of_Los_Angeles%2C_California.svg.png',
        itineraries: ["5ca1b6a90193271048449027", "5ca1b6a90193271048449028", "5ca1b6a90193271048449029", "5ca1b6a90193271048449030"],
    },
    {
        name: 'Paris',
        photo: 'https://cdn2.civitatis.com/francia/paris/galeria/torre-eiffel-altura.jpg',
        photo2: 'https://viajes.nationalgeographic.com.es/medio/2024/02/07/istock_8b9fa433_1324189687_240207013234_1200x799.jpg',
        country: 'France',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1280px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png',
        continent: 'Europe',
        description:
            'Paris is the capital and most populous city of France. Capital of the Île-de-France region, it is the only unicommunal department in the country. Its metropolitan area is the most populated in the entire European Union. Established in the centre of the Paris basin, in a loop of the Seine River, between the confluences with the Marne and the Oise. It was occupied from the 3rd century BC by the Gallic people of the Parisii, on the original site of Lutetia, from which it took the name of Paris around the year 310, to spread out in its surrounding area. Capital of the kingdom of the Franks during the reign of Clovis I, Paris became one of the main cities of France during the 10th century, with royal palaces, rich abbeys and a cathedral.',
        population: 8804109,
        language: 'French',
        currency: 'French franc',
        img_currency: 'https://http2.mlstatic.com/D_NQ_NP_916507-MLA77782818218_072024-O.webp',
        time_zone: 'Romance Standard Time (UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Grandes_Armes_de_Paris.svg/505px-Grandes_Armes_de_Paris.svg.png',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Flag_of_Paris_with_coat_of_arms.svg/800px-Flag_of_Paris_with_coat_of_arms.svg.png',
        itineraries: ["5ca1b6a90193271048449019", "5ca1b6a90193271048449020","5ca1b6a90193271048449021","5ca1b6a90193271048449022"],
    },
    {
        name: 'Marseilles',
        photo: 'https://explorial.com/wp-content/uploads/2023/02/Marseille_amarelo-1024x768.jpg',
        photo2: 'https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg',
        country: 'France',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1280px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png',
        continent: 'Europe',
        description:
            'Marseille is a port city in the south of France, capital of the Bouches-du-Rhône department and the Provence-Alpes-Côte d´Azur region. With 859,543 inhabitants, Marseille is the second most populous city in the country after Paris. It is the main economic centre and the largest metropolis in southern France, and has around 1,605,000 inhabitants in its urban area, the third largest in the country, after Paris and Lyon. It is the most important commercial port in the French Mediterranean and in France as a whole, as well as one of the most important in the entire Mediterranean, a centre of important industrial activity specialising in petrochemicals and oil refining, shipbuilding and various industries, and is also a communications hub where the routes between Paris, Italy, Switzerland and Spain converge. Marseille is the seat of an archdiocese and the University of Aix-Marseille, founded in 1409.',
        population: 930393,
        language: 'French',
        currency: 'French franc',
        img_currency: 'https://http2.mlstatic.com/D_NQ_NP_916507-MLA77782818218_072024-O.webp',
        time_zone: 'Romance Standard Time (UTC+01:00) Brussels, Copenhagen, Madrid, Paris',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Armoiries_de_Marseille.svg',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Marseille.svg/800px-Flag_of_Marseille.svg.png',
        itineraries: [],
    },
    {
        name: 'Tokyo',
        photo: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/10/7e/60/db.jpg',
        photo2: 'https://www.gotokyo.org/es/destinations/eastern-tokyo/images/area024_1000_78.jpg',
        country: 'Japan',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png',
        continent: 'Asia',
        description:
            'Tokyo, officially Tokyo Metropolis (東京都, Tōkyō-to), is the de facto capital of Japan, located in the east-central part of the island of Honshu, specifically in the Kantō region. It is the most populous city in the world, together it is one of the 47 prefectures of Japan. It is the center of politics, economy, education, communication and culture of the country. It also has the highest concentration of corporate headquarters, financial institutions, universities and colleges, museums, theaters, commercial and entertainment establishments in all of Japan.',
        population: 14215906,
        language: 'Japanese',
        currency: 'Yen',
        img_currency:
            'https://blog.hanyuchineseschool.com/wp-content/uploads/2023/03/Yen-japones-mujer.jpg',
        time_zone: 'Tokyo Standard Time (UTC+09:00) Osaka, Sapporo, Tokyo',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Symbol_of_Tokyo_Metropolis.svg/500px-Symbol_of_Tokyo_Metropolis.svg.png',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Tokyo_Metropolis.svg/800px-Flag_of_Tokyo_Metropolis.svg.png',
        itineraries: [
            '5ca1b6a90193271048449003',
            '5ca1b6a90193271048449004',
            '5ca1b6a90193271048449005',
            '5ca1b6a90193271048449006',
        ],
    },
    {
        name: 'Yokohama',
        photo: 'https://explorial.com/wp-content/uploads/2023/02/Marseille_amarelo-1024x768.jpg',
        photo2: 'https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg',
        country: 'Japan',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png',
        continent: 'Asia',
        description:
            'Yokohama (横浜 Yokohama) is a Japanese city located in the Kantō region, on the island of Honshū. It is the capital of Kanagawa Prefecture and the second most populated city in the country behind Tokyo, with a population of over 3.7 million people. It is located on a peninsula in Tokyo Bay, on the shores of the Pacific Ocean, and began to develop in 1859 with the inauguration of the Port of Yokohama. Being one of the first trading enclaves during the opening of Japan to the outside world, the development of the town has been greatly influenced by foreign merchants who resided in specific districts, separated from the local population. All these restrictions were eliminated on April 1, 1899, when Yokohama became a city. It is currently the Japanese port of reference for international trade, being used during the Meiji era in the silk trade and since the 20th century for multiple purposes.',
        population: 3681279,
        language: 'Japanese',
        currency: 'Yen',
        img_currency:
            'https://blog.hanyuchineseschool.com/wp-content/uploads/2023/03/Yen-japones-mujer.jpg',
        time_zone: 'Tokyo Standard Time (UTC+09:00) Osaka, Sapporo, Tokyo',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Emblem_of_Yokohama%2C_Kanagawa.svg/500px-Emblem_of_Yokohama%2C_Kanagawa.svg.png',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Flag_of_Yokohama%2C_Kanagawa.svg/600px-Flag_of_Yokohama%2C_Kanagawa.svg.png',
        itineraries: [],
    },
    {
        name: 'Toronto',
        photo: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/517000/517220-canada.jpg',
        photo2: 'https://s1.elespanol.com/2019/06/26/viajes/viajes-toronto-viajes_409221077_126585955_1706x960.jpg',
        country: 'Canada',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png',
        continent: 'North America',
        description:
            'Toronto is the capital of the province of Ontario and, with a population of 2,794,356, is the largest and most populous city in Canada, as well as the country`s financial centre. Its metropolitan area has a total population of over 6,202,225. Located on the northwest shore of Lake Ontario, it is the fifth-largest city in North America. Toronto is located at the heart of the Greater Toronto Area (GTA), the largest metropolitan area in Canada, and is part of a densely populated region in south-central Ontario known as the Golden Horseshoe, home to eight million people.',
        population: 2794356,
        language: 'English and French',
        currency: 'Canadian dollar',
        img_currency:
            'https://www.shutterstock.com/image-photo/robert-borden-portrait-canada-100-600nw-1614911866.jpg',
        time_zone: 'Eastern Standard Time (UTC-05:00) Eastern Time (US and Canada)',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Coat_of_arms_of_Toronto.svg/704px-Coat_of_arms_of_Toronto.svg.png',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Toronto%2C_Canada.svg/800px-Flag_of_Toronto%2C_Canada.svg.png',
        itineraries: ["5ca1b6a90193271048449015", "5ca1b6a90193271048449016", "5ca1b6a90193271048449017", "5ca1b6a90193271048449018"],
    },
    {
        name: 'Montreal',
        photo: 'https://www.travelreport.mx/wp-content/uploads/2022/08/montreal-razones-visitar-Quebec-City-Quebec-%C2%A9Destination-Canada.jpg',
        photo2: 'https://content.r9cdn.net/rimg/dimg/0b/56/99204762-city-6966-162975ff04c.jpg?width=1366&height=768&xhint=1988&yhint=1125&crop=true',
        country: 'Canada',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png',
        continent: 'North America',
        description:
            'Montreal is the largest city in the province of Quebec, Canada, and the second most populous city in the country after Toronto. It is located on the island of the same name between the Saint Lawrence River and the Rivière des Prairies. It is one of the major industrial, commercial and cultural centres of North America. Montreal is the fourth most populous francophone city in the world, behind Paris, Kinshasa and Abidjan; it was the second largest francophone city for seven decades (after surpassing Marseille) until 1987, when it was surpassed in population by the Congolese capital, Kinshasa. However, Montreal also has a large anglophone community and a growing number of people whose native language is neither French nor English.',
        population: 1987266,
        language: 'English and French',
        currency: 'Canadian dollar',
        img_currency:
            'https://www.shutterstock.com/image-photo/robert-borden-portrait-canada-100-600nw-1614911866.jpg',
        time_zone: 'Eastern Standard Time (UTC-05:00) Eastern Time (US and Canada)',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Coat_of_arms_of_Montreal.svg/539px-Coat_of_arms_of_Montreal.svg.png',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Montreal.svg/435px-Flag_of_Montreal.svg.png',
        itineraries: [],
    },
    {
        name: 'Bogota',
        photo: 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9nb3RhfGVufDB8fDB8fHww',
        photo2: 'https://latinexclusive.com/sites/default/files/styles/textarea_with_background_1440x500/public/bogota_destination.jpg?itok=I1asoEt9',
        country: 'Colombia',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/800px-Flag_of_Colombia.svg.png',
        continent: 'South America',
        description:
            'Bogotá is the capital of the Republic of Colombia and of the department of Cundinamarca. It is administered as a capital district, and enjoys autonomy for the management of its interests within the limits of the Constitution and the law. Unlike the other districts of Colombia, Bogotá is a territorial entity of the first order, with the administrative powers that the law confers on the departments. It is made up of 20 localities, where each of these has its own mayor, who is called Minor Mayor, and a Local Administrative Board (JAL), and is the political, economic, administrative, industrial, artistic, cultural, sports and tourist epicenter of the country.',
        population: 8034649,
        language: 'Spanish',
        currency: 'Colombian Peso',
        img_currency:
            'https://icambio.es/wp-content/uploads/2020/04/billete-de-5000-pesos-colombianos-anverso.png',
        time_zone:
            'Pacific Standard Time, South America (UTC-05:00) Bogota, Lima, Quito, Rio Branco',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_de_Armas_de_Bogota.svg/354px-Escudo_de_Armas_de_Bogota.svg.png',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Bogot%C3%A1.svg/750px-Flag_of_Bogot%C3%A1.svg.png',
        itineraries: [],
    },
    {
        name: 'Medellin',
        photo: 'https://www.edu.gov.co/images/galeria-home/agendacentro.jpg',
        photo2: 'https://turibuscolombia.com/wp-content/uploads/2020/03/medellin-06.jpg',
        country: 'Colombia',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/800px-Flag_of_Colombia.svg.png',
        continent: 'South America',
        description:
            'Medellín, Special District of Science, Technology and Innovation is the capital of the department of Antioquia. It is located in the widest part of the natural region known as the Aburrá Valley, in the central mountain range of the Andes. It extends along both banks of the Medellín River, which crosses it from south to north, and is the main municipality of the Aburrá Valley Metropolitan Area. It is the most populated city in the department and the second most populated in the country after Bogotá. This municipality was declared a special district of science, technology and innovation by Legislative Act No. 01 of 2021 and articles 328 and 356 of the Political Constitution and implemented by law 2286 of 2023.',
        population: 2700702,
        language: 'Spanish',
        currency: 'Colombian Peso',
        img_currency:
            'https://icambio.es/wp-content/uploads/2020/04/billete-de-5000-pesos-colombianos-anverso.png',
        time_zone:
            'Pacific Standard Time, South America (UTC-05:00) Bogota, Lima, Quito, Rio Branco',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Escudo_de_Medellin.svg/446px-Escudo_de_Medellin.svg.png',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Medell%C3%ADn.svg/763px-Flag_of_Medell%C3%ADn.svg.png',
        itineraries: ['5ca1b6a90193271048449001', '5ca1b6a90193271048449002'],
    },
    {
        name: 'Reykjavík',
        photo: 'https://cdn.sanity.io/images/np2gumla/production/c9a5024d2f41117db4e2f7094a1b8744c9686160-3660x2743.jpg?w=1920&h=1280&fit=crop&auto=format',
        photo2: 'https://media.traveler.es/photos/613768896936668f30c3e829/16:9/w_2560%2Cc_limit/162294.jpg',
        country: 'Iceland',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.svg.png',
        continent: 'Europe',
        description:
            'Reykjavík is the capital and most populous city of Iceland. Located south of Faxaflói Bay, in an area where geysers abound, its latitude is 64 ° 08 `N, very close to the Arctic Circle, making it the northernmost capital of a sovereign state. During the winter it only receives four hours of sunlight per day and during the summer the nights are as clear as day. Its population is 121,960 inhabitants (2015), a third of that of the country. The capital district reaches 212,120 inhabitants. It is one of the cleanest, greenest and safest cities in the world.',
        population: 121960,
        language: 'Icelandic',
        currency: 'Icelandic krona',
        img_currency: 'https://http2.mlstatic.com/D_NQ_NP_842364-MCO44485228720_012021-O.webp',
        time_zone: 'Greenwich Standard Time (UTC-0) Monrovia, Reykjavik',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Reykjavik_Coat_of_Arms.svg/116px-Reykjavik_Coat_of_Arms.svg.png',
        flag_cities:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_Reykjavik%2C_Iceland.svg/393px-Flag_of_Reykjavik%2C_Iceland.svg.png',
        itineraries: [
            '5ca1b6a90193271048449007',
            '5ca1b6a90193271048449008',
            '5ca1b6a90193271048449009',
        ],
    },
    {
        name: 'Kopavogur',
        photo: 'https://www.edu.gov.co/images/galeria-home/agendacentro.jpg',
        photo2: 'https://turibuscolombia.com/wp-content/uploads/2020/03/medellin-06.jpg',
        country: 'Iceland',
        flag_country:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.svg.png',
        continent: 'Europe',
        description:
            'Kópavogur or Kópavogsbær is the second largest city in Iceland. It is a suburb of the metropolitan area of ​​Reykjavík, in the Höfuðborgarsvæðið region. It is located in the southwest of the country, between the capital and the city of Garðabær. During the Danish monopoly established from 1602 to 1787 over the entire island, the city was chosen in 1662 by Bishop Brynjólfur Sveinsson and Árni Oddsson (representing the Icelandic people) to sign the agreement by which the Danish monarch was recognized as sovereign of the island.',
        population: 37959,
        language: 'Icelandic',
        currency: 'Icelandic krona',
        img_currency: 'https://http2.mlstatic.com/D_NQ_NP_842364-MCO44485228720_012021-O.webp',
        time_zone: 'Greenwich Standard Time (UTC-0) Monrovia, Reykjavik',
        ensign: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/K%C3%B3pavogur_COA.svg/400px-K%C3%B3pavogur_COA.svg.png',
        flag_cities: 'not found',
        itineraries: [],
    },
]

City.insertMany(cities)
