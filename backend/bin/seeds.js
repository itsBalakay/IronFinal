const mongoose = require("mongoose");
const Shirt = require("../models/Shirts");
mongoose
  .connect(
    "mongodb+srv://mahim:mahim@cluster0.r3bte.mongodb.net/jersey?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(async (sell) => {
    await Shirt.deleteMany();
    await Shirt.insertMany(shirts);
  });

const shirts = [
  {
    club: "Arsenal",
    year: 2004,
    player: "Reyes",
    league: "Premier League",
    size: "L",
    condition: 7,
    price: 69.99,
    notes:
      "Home shirt as worn by the Spanish international forward in the FA Cup winning 2004-05 season. Reyes made a total of 69 appearances for the Gunners, scoring 16 times before leaving on a season long loan to Real Madrid in exchange for Júlio Baptista. The versatile forward had spells at Atlético Madrid and Sevilla before tragically passing away after a traffic collision in his home town of Utrera",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-04-home-reyes_1_3_4.jpg",
    //https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-04-home-2_2_1_1_1_1_1_1_1_1_1_1_1_1_3.jpg
  },
  {
    club: "Arsenal",
    year: 1995,
    player: "Wright",
    league: "Premier League",
    size: "S",
    condition: 9,
    price: 239.99,
    notes:
      "Classic design away shirt as worn by Wright in the season he top-scored for the side with 23 goals in 40 appearances",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-95-away-wright_1_1_3_1_2_1_3_2_1_1_1_2_1_2_1_1_3_3_2_1_2_2_3_1_2_2_1_1_1_1.jpg",
    //https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-95-away_5_7_1_1_1_1.jpg
  },
  {
    club: "Arsenal",
    year: 2002,
    player: "Henry",
    league: "Premier League",
    size: "XL",
    condition: 9,
    price: 399.99,
    notes:
      "Extremely rare third shirt only worn in two games during this season, one of which was the FA Cup Semi-Final victory over Sheffield United at Old Trafford. Only a limited number of these were produced",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-01-away-henry-pp_5_1_1_2_1_1_2_1_1.jpg",
    //https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-02-third-ns_1__2_1_1.jpg
  },
  {
    club: "Arsenal",
    year: 1983,
    player: null,
    league: "Premier League",
    size: "S",
    condition: 6,
    price: 399.99,
    notes:
      "Extremely rare away shirt with great vintage design as worn when Don Howe was manager and the side were upset by York City in the FA Cup",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-83-away-new.jpg",
  },
  {
    club: "Chelsea",
    year: 2006,
    player: "Drogba",
    league: "Premier League",
    size: "M",
    condition: 7,
    price: 99.99,
    notes:
      "Third shirt as worn by Drogba in the run to the FA Cup and League Cup double. The striker reached 20 league goals in a campaign which saw him take the Premiership's Golden Boot award and score a couple of his most memorable strikes, including a lashing half-volley on the turn against Liverpool and an unbelievable long-range thunderbolt against Everton. Perhaps one of the most complete and certainly one of the most feared forwards ever to play in England, Drogba scored over 100 Premiership goals in two-spells at Stamford Bridge, cementing himself as a Blues legend",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-06-third-drogba-pslex_2_1_3_1_3_1_2_2_1_1_1_2_2_1_1.jpg",
    //https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-06-third_6_1_3_1_3_1_2_2_1_1_1_2_2_1_1.jpg
  },
  {
    club: "Chelsea",
    year: 1994,
    player: "Gullit",
    league: "Premier League",
    size: "L",
    condition: 8,
    price: 319.99,
    notes:
      "Rare away shirt as worn by Gullit in his first season at the Bridge after leaving Italy where he had established himself as one of the greatest players of his generation. He scored 6 goals during the campaign under boss Glen Hoddle as the side made it to the FA Cup semi-finals",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-94-away-gullit-new_1_1.jpg",
    //https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-94-away-new_1_1.jpg
  },
  {
    club: "Chelsea",
    year: 2007,
    player: "Lampard",
    league: "Premier League",
    size: "L",
    condition: 8,
    price: 74.99,
    notes:
      "Away shirt as worn by Lampard when the side reached their first ever Champions League final and finished 2nd in the League with Avram Grant taking over after Jose Mourinho's departure",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-07-away-lampard_1_2_1_2_2_2_1_1_2_1_1_1_4_2_1.jpg",
    //https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-07-away_9_1_1_1_1_2_2_2_1_1_2_1_1_1_4_2_1.jpg
  },
  {
    club: "Chelsea",
    year: 2007,
    player: "Lampard",
    league: "Premier League",
    size: "L",
    condition: 8,
    price: 74.99,
    notes:
      "Away shirt as worn by Lampard when the side reached their first ever Champions League final and finished 2nd in the League with Avram Grant taking over after Jose Mourinho's departure",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-07-away-lampard_1_2_1_2_2_2_1_1_2_1_1_1_4_2_1.jpg",
    //https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-07-away_9_1_1_1_1_2_2_2_1_1_2_1_1_1_4_2_1.jpg
  },
  {
    club: "Liverpool",
    year: 2006,
    player: "Gerrard",
    league: "Premier League",
    size: "XL",
    condition: 6,
    price: 59.99,
    notes:
      "Home shirt as worn by Liverpool captain Steven Gerrard in the season the side made it to the 2007 Champions League Final where the Reds missed out in a 2-1 defeat to AC Milan",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-06-home-gerrard-euro_3_2_2_1_1_1_1_1_1_2_1_2_2_1_1_2_1.jpg",
    //https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1440x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-06-home_2_34_1_2_2_1_1_2_1.jpg
  },
  {
    club: "Liverpool",
    year: 1995,
    player: null,
    league: "Premier League",
    size: "L",
    condition: 6,
    price: 129.99,
    notes:
      "Classic design home shirt worn by the Spice Boys as they finished third in the Premier League, despite being many peoples pre-season favourites. This design is perhaps most famously remembered for the 4-3 win over Newcastle, where Stan Collymore's late winner proved the difference between the sides. The match was voted as the Match of the Decade during the Premier Leagues ten year celebrations in 2002. Roy Evans' side also reached the FA Cup final only to be defeated by bitter rivals Manchester United",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-95-home_23_3_2_2_1_2_1_1_1_1_1_1_2_2_1_1_1_1_2_3_1_1_2_1_1_1_2_1_1_1_4_1_2_1_1_2_1_1_1_1.jpg",
    //https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/458x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-95-home-crest_1_1_1_2_2_1_1_1_1_2_3_1_1_2_1_1_1_2_1_1_1_4_1_2_1_1_2_1_1_1_1.jpg
  },
  {
    club: "Liverpool",
    year: 2019,
    player: "Salah",
    league: "Premier League",
    size: "L",
    condition: 9,
    price: 79.99,
    notes:
      "Away shirt as worn in a historic season for Jürgen Klopp's Reds as they ended 30 years of heartache for the red side of Merseyside with their first ever Premier League title. Liverpool stormed to the crown, breaking numerous top flight records in the process including; the most consecutive home wins (24), biggest point lead at any time (25), the most home wins and most consecutive wins (both 18) and enjoyed a 44 game unbeaten run that began the previous season. Due to the break in the season from the Coronavirus pandemic, Liverpool claimed the unusual record of winning the Premier League earlier than any other team by games played and also later than any other team by date (being the only team to clinch the title in June). Salah continued to pile on goals for the Merseyside club, becoming the first player since Michael Owen to score 20 goals in all competitions in three straight seasons for the Reds, whilst also accruing an impressive 10 assists",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-19-away-tags-salah_1_1_1.jpg",
    //https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-19-away-tags_4_1_1_1.jpg
  },
  {
    club: "Manchester City",
    year: 2015,
    player: "Silva",
    league: "Premier League",
    size: "S",
    condition: 8,
    price: 79.99,
    notes:
      "Home shirt worn in Manuel Pellegrini's final season in charge where he guided the side to a League Cup triumph thanks to Willy Cabellero's heroics in the penalty shoot out against Liverpool and reached the Champions League Semi-Finals before losing out to Real Madrid. Silva made 36 appearances scoring 4 goals in all competitions during this campaign, scooping up Etihad player of the season for his impressive contributions, as voted for by the fans.",
    imageUrl:
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-15-home-silva-pp_1.jpg",
    //https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-15-home-pp_1_4_1.jpg
  },
];

module.exports = shirts;
