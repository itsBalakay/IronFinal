const mongoose = require("mongoose");
const Shirt = require("../models/Shirts");

mongoose
  .connect(
    "mongodb+srv://mahim:mahim@cluster0.r3bte.mongodb.net/shirts?retryWrites=true&w=majority",
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
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-04-home-reyes_1_3_4.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-04-home-2_2_1_1_1_1_1_1_1_1_1_1_1_1_3.jpg",
    ],
  },
  {
    club: "Arsenal",
    year: 1997,
    player: "Bergkamp",
    league: "Premier League",
    size: "XXL",
    condition: 9,
    price: 179.99,
    notes:
      "Home shirt as worn by Bergkamp in the 97-98 Double winning season. The Dutchman's most prolific season at Arsenal, Bergkamp scored 22 goals in 40 games as the Premiership and FA Cup came back to Highbury, as well as personally winning the PFA Player of the Year award and scoring perhaps one of the greatest hat-tricks in the history of the game away at Leicester City",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-96-home-bergkamp-new_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-96-home-premium_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-96-home-close-new_1.jpg",
    ],
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
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-95-away-wright_1_1_3_1_2_1_3_2_1_1_1_2_1_2_1_1_3_3_2_1_2_2_3_1_2_2_1_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-95-away_5_7_1_1_1_1.jpg",
    ],
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
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-01-away-henry-pp_5_1_1_2_1_1_2_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-02-third-ns_1__2_1_1.jpg",
    ],
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
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-83-away-new.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-83-away-premium1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-83-away-premium4_1.jpg",
    ],
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
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-06-third-drogba-pslex_2_1_3_1_3_1_2_2_1_1_1_2_2_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-06-third_6_1_3_1_3_1_2_2_1_1_1_2_2_1_1.jpg",
    ],
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
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-94-away-gullit-new_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-94-away-new_1_1.jpg",
    ],
  },
  {
    club: "Chelsea",
    year: 2007,
    player: "Lampard",
    league: "Premier League",
    size: "M",
    condition: 6,
    price: 59.99,
    notes:
      "Away shirt as worn by Lampard when the side reached their first ever Champions League final and finished 2nd in the League with Avram Grant taking over after Jose Mourinho's departure",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-07-away-lampard_1_2_1_2_2_2_1_1_2_1_1_1_4_2_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-07-away_9_1_1_1_1_2_2_2_1_1_2_1_1_1_4_2_1.jpg",
    ],
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
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-07-away-lampard_1_2_1_2_2_2_1_1_2_1_1_1_4_2_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/c/h/chelsea-07-away_9_1_1_1_1_2_2_2_1_1_2_1_1_1_4_2_1.jpg",
    ],
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
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-06-home-gerrard-euro_3_2_2_1_1_1_1_1_1_2_1_2_2_1_1_2_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1440x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-06-home_2_34_1_2_2_1_1_2_1.jpg",
    ],
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
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-95-home_23_3_2_2_1_2_1_1_1_1_1_1_2_2_1_1_1_1_2_3_1_1_2_1_1_1_2_1_1_1_4_1_2_1_1_2_1_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/458x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-95-home-crest_1_1_1_2_2_1_1_1_1_2_3_1_1_2_1_1_1_2_1_1_1_4_1_2_1_1_2_1_1_1_1.jpg",
    ],
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
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-19-away-tags-salah_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/l/i/liverpool-19-away-tags_4_1_1_1.jpg",
    ],
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
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-15-home-silva-pp_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-15-home-pp_1_4_1.jpg",
    ],
  },
  {
    club: "Manchester City",
    year: 2008,
    player: "Kompany",
    league: "Premier League",
    size: "XL",
    condition: 7,
    price: 79.99,
    notes:
      "Home shirt as worn by Kompany during the season in which the side finished 10th in the Premier League under Mark Hughes. In his debut season at the club following his move from Hamburg, Kompany settled in immediately and made 45 appearances across all competitions",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-08-home-kompany_2_1_1_1_1_3_2_1_1_1_1_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-08-home_1_5_1_1_2_2_2_2_1_1_1_1_1_3_2_1_1_1_1_2.jpg",
    ],
  },
  {
    club: "Manchester City",
    year: 1997,
    player: null,
    league: "Premier League",
    size: "XL",
    condition: 7,
    price: 179.99,
    notes:
      "Classic design home shirt as worn when the side suffered relegation to Division Two in '98 but famously bounced back in dramatic fashion in the following campaign with a Play-Off triumph over Gillingham",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-97-home_1_4_1_3_1_1_1_3_2_2_3_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-97-home-reverse_1_3_1_1_1_3_2_2_3_1.jpg",
    ],
  },
  {
    club: "Manchester City",
    year: 2016,
    player: "De Bruyne",
    league: "Premier League",
    size: "L",
    condition: 10,
    price: 79.99,
    notes:
      "Away shirt as worn by De Bruyne as the Pep Guardiola revolution swept into the Etihad with a 6 match winning streak at the beginning of the Premier League campaign. The side eventually finished 3rd in the Premier League and crashed out of the Champions League in the Round of 16, losing out to Monaco",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-16-away-debruyne_1_1_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-16-away_2_3_1_1_1_1_1_2.jpg",
    ],
  },
  {
    club: "Manchester City",
    year: 2011,
    player: "Nasri",
    league: "Premier League",
    size: "M",
    condition: 8,
    price: 99.99,
    notes:
      "Home shirt as worn when City sealed their first league title win in 44 years in the most dramatic of circumstances, with City needing a 93rd minute winner to seal the title on goal difference from under the noses of bitter rivals Manchester United. City looked to be slumping to a shock 2-1 loss to relegation-threatened QPR when Edin Džeko managed to nod home an equaliser in the 91st minute to renew hope, what ensued will go down as one of the greatest Premier League moments ever as Sergio Agüero managed to latch on to a desperate Balotelli's through ball and fire in the title-winning goal passed Paddy Kenny, cue delirium in the stands and some iconic commentary from Martin Tyler",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/764x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-11-home-nasri_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-11-home_20_1.jpg",
    ],
  },
  {
    club: "Manchester City",
    year: 2013,
    player: "Navas",
    league: "Premier League",
    size: "S",
    condition: 7,
    price: 79.99,
    notes:
      "Away shirt from Manuel Pellegrini's first season in charge when he guided City to a memorable Premier League and League Cup double. Navas joined City in a £14.9m deal from Sevilla after overcoming chronic homesickness and anxiety attacks which had seen him return home from Sevilla training camps away from the Andalusian capital. The Spanish winger showed no signs of his previous troubles for City, making his debut in a 4-0 win over Newcastle on the opening day of the season and memorably scoring the first of 6 after just 13 seconds against Tottenham. The winger made a total of 123 appearances for City, scoring 4 times before returning to his native Sevilla in 2017",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-13-away-navas_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-13-away-use_2.jpg",
    ],
  },
  {
    club: "Manchester City",
    year: 2003,
    player: "Reyna",
    league: "Premier League",
    size: "XXL",
    condition: 9,
    price: 59.99,
    notes:
      "Away shirt as worn by Reyna during the season the side narrowly avoided relegation with a 16th place finish. The American signed during the summer from Sunderland for a fee of £2.5m, but Reyna's spell at City was afflicted by injury",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-03-away-reyna_4_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-city-03-away_2_4_1_1.jpg",
    ],
  },
  {
    club: "Manchester United",
    year: 1992,
    player: "Cantona",
    league: "Premier League",
    size: "XL",
    condition: 9,
    price: 399.99,
    notes:
      "Classic lace-neck design home shirt as worn by the legend Eric Cantona when he first joined United in November '92 from rivals Leeds and made an immediate impact, inspiring the side to a first league title in 26 years and then to the Double in 1993-94",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-92-home-cantona-use_5_3_1_1_1_1_3_1_1_1_1_3_3_1_2_2_1_2_1_1_1_2_1_1_2_1_4_3_1_1_2_1_2_3.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-92-home_1_1_2_3_1_1_2_1_2_3.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-92-home-close_1_2_3_1_1_2_1_2_3.jpg",
    ],
  },
  {
    club: "Manchester United",
    year: 1993,
    player: null,
    league: "Premier League",
    size: "XL",
    condition: 9,
    price: 249.99,
    notes:
      "The '93-95 away shirt from Umbro would see United move away from the blue that was worn in previous seasons. This black design with its blue and yellow trims would be synonymous with Cantona and his kung-fu kick during a game at Selhurst Park. Also worn in the 3-3 draw against Liverpool at Anfield and the agonising draw against West Ham on the last day of the season",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-93-away_22_2_1_1_1_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-93-away-reverse_2_1_2_1_1_1_2.jpg",
    ],
  },
  {
    club: "Manchester United",
    year: 2006,
    player: "Ronaldo",
    league: "Premier League",
    size: "XXL",
    condition: 7,
    price: 129.99,
    notes:
      "Home shirt as worn by Ronaldo when United won their first Premier League title in 4 years and the dazzling attacker announced his name on the world stage. Jeered across the land for his part in England's exit from the World Cup, Ronaldo appeared entirely unfazed and with 17 goals swept up the Premier League awards ceremony, taking both the Young Player and open-age Player of the Season trophies as he visibly matured into the ruthless and relentless goalscorer of the future",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-06-home-pp-ronaldo_2_1_1_3_2_1_2_1_1_1_3_1_1_1_1_1_1_2_4_1_1_1_1_1_1_5_1_1_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-06-home-pp-playersize_4_1_3_3_1_1_3_2_1_2_1_1_1_3_1_1_1_1_1_1_2_4_1_1_1_1_1_1_5_1_1_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-06-home-pp-playersize-close_4_1_3_3_1_1_3_2_1_2_1_1_1_3_1_1_1_1_1_1_2_4_1_1_1_1_1_1_5_1_1_1_1_1.jpg",
    ],
  },
  {
    club: "Manchester United",
    year: 1994,
    player: "Beckham",
    league: "Premier League",
    size: "L",
    condition: 9,
    price: 199.99,
    notes:
      "Third shirt as worn by Beckham in his breakthrough season. The midfield superstar from the Class of '92 became a regular in 95-96 making 40 appearances and scoring 8 goals to help United famously come from 10 points behind to take the title from Kevin Keegan's Newcastle",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-94-third-beckham_2_2_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-94-third-front-new_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-94-third-premium-hof-2_1_1_1.jpg",
    ],
  },
  {
    club: "Manchester United",
    year: 2010,
    player: "Scholes",
    league: "Premier League",
    size: "M",
    condition: 7,
    price: 99.99,
    notes:
      "Home shirt as worn by the classy playmaker when the side clinched a record 19th League title",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-10-home-scholes-lextra-pp_1_3_2_1_1_1_3.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/756x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-10-home-pp-_3_1_2_1_1_1_2_1_1_1_1_3.jpg",
    ],
  },
  {
    club: "Manchester United",
    year: 1998,
    player: "Keane",
    league: "Premier League",
    size: "L",
    condition: 9,
    price: 149.99,
    notes:
      "Famous home shirt from the glorious 98-99 Treble season when Alex Ferguson guided the Red Devils to the promised land with triumphs in the Premiership, FA Cup and Champions League. The iconic zip-collar design was worn in the memorable comeback to defeat rivals Liverpool in the FA Cup 4th Round, when the title was secured in a frantic season finale at Old Trafford against Spurs and at Wembley when Sheringham and Scholes saw off Shearer's Newcastle.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-98-home-keane-lextra_4_3_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-98-home_1_15_1_1_1_1_1_3_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-98-home-premium-2_15_1_1_1_1_1_3_2.jpg",
    ],
  },
  {
    club: "Manchester United",
    year: 2018,
    player: "Rashford",
    league: "Premier League",
    size: "S",
    condition: 9,
    price: 129.99,
    notes:
      "Away shirt as worn during a tumultuous season for the Red Devils. Jose Mourinho could only last until December after 7 wins in his first 17 games was deemed sackable. His replacement, club legend Ole Gunnar  Solskjær eventually steadied the ship, initially coming in as caretaker manager. Solskjær was then given the job permanently in late March. Particular highlights included a surprise comeback win over PSG in the Champions League round of 16. At the beginning of this campaign Rashford inherited the #10 shirt, previously worn by club legends Wayne Rooney, David Beckham and Ruud van Nistelrooy. The striker was not feeling the pressure as he went on to make 47 appearances scoring 13 goals in all competitions, most notably stepping up to face the legendary Italian stopper Gianluigi Buffon, scoring the penalty that secured the 3-1 win over PSG in fearless fashion",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/744x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-18-away-rashford_2_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-18-away-1_2.jpg",
    ],
  },
  {
    club: "Tottenham",
    year: 1994,
    player: "Klinsmann",
    league: "Premier League",
    size: "M",
    condition: 9,
    price: 179.99,
    notes:
      "Away shirt as worn when Klinsmann scored on his debut in a thrilling 4-3 win at Hillsborough against Sheffield Wednesday, and went on to score 20 goals in 41 league games in his first spell with Spurs",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/t/o/tottenham-94-away-klinsmann_4_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/t/o/tottenham-94-away_1.jpg",
    ],
  },
  {
    club: "Tottenham",
    year: 2008,
    player: "Bale",
    league: "Premier League",
    size: "XXL",
    condition: 8,
    price: 79.99,
    notes:
      "Away shirt as worn by Bale during the season when Harry Redknapp took over as manager and guided the side to an eighth place finish after their awful start to the season. Bale made 30 appearances this season mainly being used at left back in cup competition. Injuries and the absence of Wilson Palacios forced Redknapp into using a 3-5-2 formation towards the end of season, with Bale playing as an attacking full back, sowing the seeds for his future as one of the best attacking players of his generation",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/t/o/tottenham-08-away-bale_3_2_3_1_2_1_1_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/t/o/tottenham-08-away_2_1_2_1_1_1_4_1_2_3_1_2_1_1_1_1_1.jpg",
    ],
  },
  {
    club: "Tottenham",
    year: 2016,
    player: "Son",
    league: "Premier League",
    size: "M",
    condition: 9,
    price: 99.99,
    notes:
      "Third shirt as worn in the last season at White Hart Lane when Mauricio Pochettino's boys signed off in style, remaining unbeaten at home in the league and achieving their highest league finish since 1971, also finishing above Arsenal for the first time in 22 years in an historic campaign. With Delle Alli again awarded the PFA Young Player of the Year and Harry Kane banging in the goals Spurs were able to build on last year's title challenge finishing behind only Chelsea. After apparently asking manager Mauricio Pochettino to leave White Hart Lane in the summer, Son was given the chance to fight for his place in the 2016-17 squad and proved to relish the opportunity. The South Korean played 48 times for the Lilywhites, scoring 21 times and becoming an integral part of the team. Son's form was recognised throughout the season, becoming the only player that year to win two Player of the Month awards in September and April",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1615x/0dc2d03fe217f8c83829496872af24a0/t/o/tottenham-16-third-son_4_2_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1646x/0dc2d03fe217f8c83829496872af24a0/t/o/tottenham-16-third-front_2_1_1.jpg",
    ],
  },
  {
    club: "Tottenham",
    year: 2008,
    player: "Modric",
    league: "Premier League",
    size: "XL",
    condition: 7,
    price: 89.99,
    notes:
      "Away shirt as worn by Modrić in his first season at the club following a £16.5M transfer from Dinamo Zagreb. He struggled with injury as the side endured an awful start to the campaign but his form improved under new boss Harry Redknapp and he helped the side to an 8th place finish",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/t/o/tottenham-08-away-modric-no-accent_3.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/t/o/tottenham-08-away_2_1_2_1_1_1_4_1_1_1_4_1_3.jpg",
    ],
  },
  {
    club: "Tottenham",
    year: 2020,
    player: "Lamela",
    league: "Premier League",
    size: "M",
    condition: 10,
    price: 499.99,
    notes:
      "Extremely rare player shirt believed to have been worn by Lamela for the Premier League match against Manchester United, played at Tottenham Hotspur Stadium, on 11th April 2020. Spurs had claimed a huge 6-1 win at Old Trafford back in October but this result couldn't have been more different. Heung-min Son gave the hosts the lead just before the break but United hit back in the second half with goals from Fred, Cavani and Greenwood to claim a big 3-1 victory in the capital. Lamela started on the bench but came on for Tanguy NDombèlé on 78 minutes with the scores still at 1-1. The former River Plate man was in his 8th season with Spurs after joining from Roma in 2013 and made 35 appearances in all competitions as Spurs finished 7th in the Premier League. The Argentine also picked up the goal of the season award for his Rabona in the North London derby.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/t/o/tottenham-20-home-mw-lamela-cinch-back.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/t/o/tottenham-20-home-mw-lamela-cinch-front.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/t/o/tottenham-20-home-mw-lamela-cinch-close.jpg",
    ],
  },
  {
    club: "Bayer Leverkusen",
    year: 2020,
    player: "Bellarabi",
    league: "Bundesliga",
    size: "M",
    condition: 10,
    price: 59.99,
    notes:
      "Home shirt as worn when Die Werkself started the Bundesliga season on fire, opening the campaign with a run of 8 wins and 4 draws to see them go top. In a hotly-contested title race, the side couldn't quite keep up with the other German footballing giants, settling for a sixth placed finish and European qualification. In the Europa League, Bayer topped their group before losing out in a high-scoring clash with BSC Young Boys in the Round of 32",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/l/e/leverkusen-20-home-bellarabi.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/l/e/leverkusen-20-home-tags_1_1_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/l/e/leverkusen-20-home-tags-close_1_1_1_1_1.jpg",
    ],
  },
  {
    club: "Bayer Leverkusen",
    year: 2000,
    player: null,
    league: "Bundesliga",
    size: "M",
    condition: 6,
    price: 49.99,
    notes:
      "Away shirt as Leverkusen slumped to a 4th place finish after falling short in the title race in the previous season",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/700x700/0dc2d03fe217f8c83829496872af24a0/b/-/b-leverkusen-00-away_3.jpg",
    ],
  },
  {
    club: "Bayern Munich",
    year: 1995,
    player: "Klinsmann",
    league: "Bundesliga",
    size: "S",
    condition: 8,
    price: 99.99,
    notes:
      "Home shirt as worn by Klinsmann during his two year spell at the club where he scored 31 goals in 65 games",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-95-home-klinsmann-new_1_3_1_3.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-95-home-use_3_3_2_1_5_1_1_1_1_3_1_1_1_1_2_4_2_1_3_1_3.jpg",
    ],
  },
  {
    club: "Bayern Munich",
    year: 2011,
    player: null,
    league: "Bundesliga",
    size: "XL",
    condition: 6,
    price: 39.99,
    notes:
      "Home shirt as worn during the season in which the side finished runners up in the Bundesliga, DFB Pokal, and Champions League",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/700x700/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-11-home_1_4_1_1_4_3_1_1_1_1_2_1_1_1_2_1.jpg",
    ],
  },
  {
    club: "Bayern Munich",
    year: 1995,
    player: "Mattaus",
    league: "Bundesliga",
    size: "M",
    condition: 9,
    price: 129.99,
    notes:
      "Classic design away shirt as worn in the UEFA Cup Final triumph over Bordeaux in 1996. One of the most durable, versatile and talented central midfielders of all time, Matthäus was the epitome of German grit and effectiveness, amassing a host of personal and team awards throughout a stellar career",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-95-away-matthaus.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-95-away_1_6.jpg",
    ],
  },
  {
    club: "Bayern Munich",
    year: 2015,
    player: "Robben",
    league: "Bundesliga",
    size: "XL",
    condition: 9,
    price: 79.99,
    notes:
      "Home shirt as worn by Robben in the last season of the Pep Guardiola era when Bayern eased to their fourth straight Bundesliga title. Famously Robert Lewandowski scored 5 times in 9 minutes against Wolfsburg, and despite a stunning comeback against Juve, Pep could not seal an elusive European title after losing out on away goals to Atletico at the semi-final stage",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-15-home-robben-use_2_2_1_2_1_2_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-15-home_3_2_2_1_2_1_2_1_1.jpg",
    ],
  },
  {
    club: "Bayern Munich",
    year: 2016,
    player: "Muller",
    league: "Bundesliga",
    size: "XL",
    condition: 9,
    price: 79.99,
    notes:
      "Away shirt as worn by Müller when Carlo Ancelotti took over the reigns continuing the side's attacking philosophy, notably destroying Arsenal 5-1 in each leg of their Champions League Round of 16 tie along with yet another Bundesliga title. Finishing 15 points ahead of second placed RB Leipzig, free scoring Bayern notched 89 league goals, 30 of which would come from Robert Lewandowski. After thrashing Arsenal in the Champions League first knockout phase, FC Hollywood would come unstuck against eventual winners Real Madrid. The season would also be remembered for the retirement of club legend Phillipp Lahm. The versatile former German international had been a mainstay in an ever changing Bayern line up for over 12 years, reinventing himself as a defensive midfielder in later seasons",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-16-away-muller_3.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-16-away_1_2_1_1_1_1_1_1_1.jpg",
    ],
  },
  {
    club: "Bayern Munich",
    year: 2019,
    player: "Lewandowski",
    league: "Bundesliga",
    size: "L",
    condition: 9,
    price: 69.99,
    notes:
      "Home shirt as worn during the season when Bayern secured their eighth straight Bundesliga crown, despite the COVID-19 pandemic. Germany became the first country to return to matches in early May with games being played behind closed doors and with strict social distancing measures. Bayern continued to distance themselves ahead of the pack as they won all nine of their remaining games, clinching the title with a 13 point margin and 100 goals scored. Talisman Robert Lewandowski continued to be ice-cold in front of goal with 49 goals in all competitions. Die Bayern capped off their dream season with a terrific run in the shortened Champions League, demolishing Barcelona 8-2 in the Quarters and vanquishing Lyon 3-0 in the Semis before coolly dispatching PSG in the final to cap off their sixth European success",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-19-home-lewandowski_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-munich-19-home-tags_2_2.jpg",
    ],
  },
  {
    club: "Bayern Munich",
    year: 2015,
    player: "Vidal",
    league: "Bundesliga",
    size: "M",
    condition: 9,
    price: 89.99,
    notes:
      "Third shirt from the last season of the Pep Guardiola era when Bayern eased to their fourth straight Bundesliga title. Famously Robert Lewandowski scored 5 times in 9 minutes against Wolfsburg, and despite a stunning comeback against Juve, Pep could not seal an elusive European title after losing out on away goals to Atletico at the Semi-Final stage",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-15-third-vidal_4_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/bayern-15-third_1_5_1.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 2012,
    player: null,
    league: "Bundesliga",
    size: "XXL",
    condition: 9,
    price: 89.99,
    notes:
      "Away shirt from a memorable campaign for BVB when they won the hearts of many neutral fans on their way to the Champions League final held at Wembley, where they would cruelly be defeated by Bayern Munich. Manager Jürgen Klopp continued his ascent to one of the most respected coaches in Europe with the side once again finishing runners-up to Bayern in the Bundesliga. Star striker Robert Lewandowski was in inspired form during this campaign, netting 36 goals in all competitions",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/700x700/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-12-away.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 1995,
    player: "Moller",
    league: "Bundesliga",
    size: "XL",
    condition: 10,
    price: 299.99,
    notes:
      "Classic design home shirt as worn when Dortmund retained the Bundesliga title finishing 6 points clear of Bayern and reached the Quarter-Finals of the Champions League in their first ever appearance in the competition. Möller returned to Die Schwarzgelb in '94-95 and helped the side to the quarter-final of the Champions League in their first ever season, making 23 appearances and scoring 8 times in all competitions",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1280x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-95-home-moller-ls_3_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-95-home-ls_3_2_2_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-95-home-close_6_2_1_1_1.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 2017,
    player: "Sancho",
    league: "Bundesliga",
    size: "S",
    condition: 10,
    price: 69.99,
    notes:
      "Away shirt as worn when Peter Bosz was appointed manager but only lasted in the job until December due to a nightmare Champions League campaign and BVB slipping down the Bundesliga to 8th. Peter Stöger came in with the tough task of turning the season around, the side managed a 4th place finish in the Bundesliga",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-17-away-sancho_3_1_3.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-17-away-tags_5_1_3.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 1996,
    player: null,
    league: "Bundesliga",
    size: "L",
    condition: 6,
    price: 279.99,
    notes:
      "Ultra-rare away shirt only used in the Champions League during the season in which Dortmund won the competition with a 3-1 victory over Juventus in the Final, difference with Bundesliga shirt is the 'C' sponsor rather than Die Continentale",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-96-away-cl-new_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-96-away-cl-back-new_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-96-away-cl-premium-1_2.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 2021,
    player: null,
    league: "Bundesliga",
    size: "L",
    condition: 10,
    price: 89.99,
    notes:
      "Home shirt for the upcoming Bundesliga season in which Die Borussen will hope to hold onto their crop of exciting world-class young talent, with several European high-rollers targeting the likes of Haaland, Sancho and Bellingham in the summer transfer market. The side will look to interrupt Bayern's streak of nine consecutive league titles, having finished third in the previous campaign",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-21-home-tags.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-21-home-back.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-21-home-tags-close.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 1996,
    player: null,
    league: "Bundesliga",
    size: "L",
    condition: 10,
    price: 389.99,
    notes:
      "Very rare home shirt only used in the Champions League during the season in which Dortmund won the competition with a 3-1 victory over Juventus in the Final. This design was used as the side defeated Man United at Old Trafford in the Semi's.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/700x700/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-96-home-cl_2_1_2_2_1_1_3_2.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 2018,
    player: "Pulisic",
    league: "Bundesliga",
    size: "M",
    condition: 10,
    price: 59.99,
    notes:
      "Very rare player issue home shirt released for BVB's Champions League campaign. Die Borussen crashed out in the Round of 16 after losing 4-0 on aggregate to eventual finalists Tottenham. This was to be the prodigy's final season at Signal Iduna Park, as his unbelievable combination of promise and production attracted the interest of perennial big spenders Chelsea, who splashed out to the tune of £58m for the winger",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-18-home-pi-eu-pulisic_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/784x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-18-home-euro-pi-tags_2_1_1_1_1.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 2014,
    player: "Reus",
    league: "Bundesliga",
    size: "S",
    condition: 8,
    price: 89.99,
    notes:
      "Away shirt as by Reus worn in the campaign that saw BVB reach the last-16 before being eliminated by a strong Juventus side with Reus scoring the only goal for the side in the 2 leg game. Reus managed to bag 12 goals in 29 games for the side in the year charismatic boss Jurgen Klopp announced he would leave his post after seven years in the job where he had completely turned the club's fortunes around",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-14-away-ls-reus_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-14-away-ls_2_1.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 2012,
    player: "Gotze",
    league: "Bundesliga",
    size: "M",
    condition: 8,
    price: 119.99,
    notes:
      "Home shirt from a memorable campaign for BVB when they won the hearts of many neutral fans on their way to the Champions League final held at Wembley, where they would cruelly be defeated by Bayern Munich. Manager Jürgen Klopp continued his ascent to one of the most respected coaches in Europe with the side once again finishing runners-up to Bayern in the Bundesliga",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-12-home-gotze_3_2_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-12-home_6_1_2_1_1.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 2009,
    player: "Lucas",
    league: "Bundesliga",
    size: "XL",
    condition: 7,
    price: 49.99,
    notes:
      "Extremely rare home shirt as worn when the side finished 5th in the Bundesliga at the beginning of the remarkable Jürgen Klopp revolution at the club. Der BVB would go on to claim Bundesliga titles in the following 2 campaigns with the eccentric German boss at the helm. Several players signed at the start of this campaign also helped inspire future success, including Barrios, Bender and Hummels. Barrios made 24 appearances scoring 5 goals in all competitions for this campaign in his first season for Die Borussen.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-09-home-lucas.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-09-home-front.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 2007,
    player: "Valdez",
    league: "Bundesliga",
    size: "XL",
    condition: 7,
    price: 79.99,
    notes:
      "Very rare player shirt believed to have been issued to or worn by Valdez during the 2007-08 season. The Paraguayan was in his second season with BVB having joined from Werder Bremen in July 06' for a reported €4.7 million. He had struggled to replicate the good goal-scoring form that he had shown with Werder in his first term at Signal Iduna Park and that continued this season. The striker made 30 appearances in all competitions netting 3 goals as Dortmund slumped to a 13th placed finish in the Bundesliga and lost out to Bayern in the DFB Pokal Final. He stayed on for another two seasons with the side before joining Spanish side Hércules in 2010 and later enjoyed spells with the likes of Rubin Kazan, Eintracht Frankfurt and Seattle Sounders. He continued to be a key player for the Paraguayan national side this season and won 77 caps in total for his country featuring at World Cups in 2006 and 2010.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-07-home-mw-valdez-back.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/d/o/dortmund-07-home-mw-valdez-front.jpg",
    ],
  },
  {
    club: "Wolfsburg",
    year: 2014,
    player: "Zhang",
    league: "Bundesliga",
    size: "L",
    condition: 7,
    price: 89.99,
    notes:
      "Rare player shirt believed to have been prepared for Zhang as Die Wölfe finished runners-up in the Bundesliga. After several impressive campaigns for Beijing Guoan, Zhang made the move to Europe and then made an unofficial debut in a friendly against Ajax Cape Town during the winter break. In this warm-up game, he assisted Bas Dost after coming off the bench as Wolfsburg ran out comfortable 4-1 victors. Zhang went on to make multiple matchday squads for competitive games but failed to make an appearance before transferring back to Beijing Guoan seven months after his initial transfer",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/w/o/wolfsburg-14-home-zhang_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/754x/0dc2d03fe217f8c83829496872af24a0/w/o/wolfsburg-14-home_1_1.jpg",
    ],
  },
  {
    club: "Wolfsburg",
    year: 2005,
    player: "Menseguez",
    league: "Bundesliga",
    size: "M",
    condition: 7,
    price: 109.99,
    notes:
      "Rare player specification shirt believed to have been issued to or worn by Juan Carlos Menseguez when the side narrowly avoided relegation by one point over Kaiserslautern. Menseguez featured 44 times during this campaign, scoring three goals and assisting four",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/c/r/crail15_lb0049.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/c/r/crail15_lb0047.jpg",
    ],
  },
  {
    club: "Barcelona",
    year: 2019,
    player: "Messi",
    league: "La Liga",
    size: "M",
    condition: 10,
    price: 99.99,
    notes:
      "Third shirt relased for use in the Champions League in a tumultuous season for the Blaugrana, in which they were neck-and-neck with great rivals Real Madrid for much of the campaign, only for a string of costly dropped points following the resumption of football to cost them their shot at the trophy. Despite the expensive additions of world class talents Antoine Griezmann and Frenkie de Jong, the side also suffered an ignominious 8-2 thrashing in the Champions League quarter-finals at the hands of eventual winners Bayern Munich. The fallout of this earth-shattering defeat led to the departure of Luis Suárez and a shock transfer request from Lionel Messi, who ultimately stayed at the Nou Camp amidst great uncertainty",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/b/a/barcelona-19-third-cl-boys-messi_2_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/b/a/barcelona-19-third-cl-boys-tags_5_2.jpg",
    ],
  },
  {
    club: "Barcelona",
    year: 2005,
    player: "Ronaldinho",
    league: "La Liga",
    size: "XL",
    condition: 9,
    price: 199.99,
    notes:
      "Away shirt as worn en route to Champions League glory. In this shirt Barça beat Chelsea at Stamford Bridge and then at the semi-final stage Ronaldinho produced a sparkling display to help the side to a crucial 1-0 win in the San Siro. This was Ronaldinho's most prolific campaign for Barça, scoring 26 in 45 games as well as providing the most assists in both La Liga and the Champions League",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/barcelona-05-away-ronaldinho_1_3_3_1_1_1_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/barcelona-05-away-_1_3_1_2_2_1_2_1_2_2.jpg",
    ],
  },
  {
    club: "Barcelona",
    year: 2018,
    player: "Dembele",
    league: "La Liga",
    size: "S",
    condition: 10,
    price: 69.99,
    notes:
      "Home shirt as worn in the 2018-19 season. After winning La Liga, Barça were fighting for the treble but were shockingly edged out by Liverpool in the Champions League Semi-Finals and lost out the Copa del Rey Final to Valencia",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/b/a/barcelona-18-home-champ-boys-dembele.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/b/a/barcelona-18-home-champ-boys-tags.jpg",
    ],
  },
  {
    club: "Barcelona",
    year: 2019,
    player: "Suarez",
    league: "La Liga",
    size: "M",
    condition: 10,
    price: 79.99,
    notes:
      "Home shirt as worn in a tumultuous season for the Blaugrana, in which they were neck-and-neck with great rivals Real Madrid for much of the campaign, only for a string of costly dropped points following the resumption of football to cost them their shot at the trophy. Despite the expensive additions of world class talents Antoine Griezmann and Frenkie de Jong, the side also suffered an ignominious 8-2 thrashing in the Champions League quarter-finals at the hands of eventual winners Bayern Munich. The fallout of this earth-shattering defeat led to the departure of Luis Suárez and a shock transfer request from Lionel Messi, who ultimately stayed at the Nou Camp amidst great uncertainty",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/b/a/barcelona-19-home-champ-suarez_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/b/a/barcelona-19-home-champ-tags_2_1.jpg",
    ],
  },
  {
    club: "Barcelona",
    year: 2001,
    player: "Rivaldo",
    league: "La Liga",
    size: "XL",
    condition: 10,
    price: 139.99,
    notes:
      "Away shirt as worn by Rivaldo in his last season for the club. He scored 14 goals in 33 games in this campaign",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/barca-01-away-rivaldo-use_1_2_2_3_1_1_1_2_2_1_1_1_2_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/barcelona-01-away-use_7_1_1_1_1_2_1_3_3_1_1_1_2_2_1_1_1_2_1_1.jpg",
    ],
  },
  {
    club: "Barcelona",
    year: 2005,
    player: "Messi",
    league: "La Liga",
    size: "XXL",
    condition: 8,
    price: 179.99,
    notes:
      "Away shirt as worn en route to Champions League glory. In this shirt Barça beat Chelsea at Stamford Bridge and then at the semi-final stage Ronaldinho produced a sparkling display to help the side to a crucial 1-0 win in the San Siro. Messi began to make his mark on the first team in this campaign, scoring 8 times in 25 appearances",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/barcelona-05-away-messi_1_2_1_1_1_1_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/b/a/barcelona-05-away-_1_3_1_2_1_1_1_1_1_1_1.jpg",
    ],
  },
  {
    club: "Real Madrid",
    year: 1998,
    player: "R.Carlos",
    league: "La Liga",
    size: "M",
    condition: 8,
    price: 139.99,
    notes:
      "Rare third shirt as worn when the side lost out to Dynamo Kiev in the Champions League Quarter Finals. The marauding left-back continued his impressive form for Real Madrid after making it to the 1998 World Cup Final with Brazil, scoring 5 goals in 47 appearances for Los Blancos. The explosive full back was unable to propel his team to the title though as they fell 11 points short of Louis van Gaal's Barcelona",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-98-third-r.carlos_1_3_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-98-third-use_5_1_2_5_1_2_1_2_2_2_1_1_1_3_1_1.jpg",
    ],
  },
  {
    club: "Real Madrid",
    year: 2009,
    player: "Kaka",
    league: "La Liga",
    size: "XL",
    condition: 9,
    price: 119.99,
    notes:
      "Away shirt as worn in the season following the side's big spending summer of 2009 when they captured Cristiano Ronaldo, Kaka, Karim Benzema, Xabi Alonso, Raul Albiol etc. for fees in excess of £200M",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-09-away-kaka_1_1_1_3.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-09-away-_1_1_1_3.jpg",
    ],
  },
  {
    club: "Real Madrid",
    year: 2010,
    player: "Higuain",
    league: "La Liga",
    size: "L",
    condition: 9,
    price: 139.99,
    notes:
      "Home shirt from Jose Mourinho's first season as manager when he managed to secure the Copa del Rey trophy but could not defeat Barca in the race for La Liga and Champions League",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-10-home-higuain_1_3_1_1_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-10-home_5_2_1_3_1_1_2.jpg",
    ],
  },
  {
    club: "Real Madrid",
    year: 2010,
    player: "Ozil",
    league: "La Liga",
    size: "M",
    condition: 9,
    price: 139.99,
    notes:
      "Home shirt from Jose Mourinho's first season as manager when he managed to secure the Copa del Rey trophy but could not defeat Barca in the race for La Liga and Champions League. Özil joined Los Blancos from Werder Bremen this season after being one of the stars of the 2010 World Cup",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-10-home-ozil_2_1_1_1_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-10-home-use_1_9_1_1_1_1_1_1_1_2_1_1_1_1_1.jpg",
    ],
  },
  {
    club: "Real Madrid",
    year: 2003,
    player: "Zidane",
    league: "La Liga",
    size: "L",
    condition: 7,
    price: 139.99,
    notes:
      "Third shirt as worn by legend Zinedine Zidane during the season in which the Galaticos missed out on the semi-finals of the Champions League despite leading 4-2 in the 1st leg of the quarter-final",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-03-third-zidane-_1_2_3.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-03-third-_1_2_3.jpg",
    ],
  },
  {
    club: "Real Madrid",
    year: 2013,
    player: "Bale",
    league: "La Liga",
    size: "L",
    condition: 8,
    price: 89.99,
    notes:
      "Third shirt as worn when the side demolished Schalke 6-1 in Gelsenkirchen in the Champions League Round of 16 first leg with Ronaldo bagging a brace. Bale became the world's most expensive player in the summer of 2013 joining the club in a mega £85.3M deal",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-13-third-bale_2_1_3_4.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-13-third-tags_7_4.jpg",
    ],
  },
  {
    club: "Real Madrid",
    year: 2014,
    player: "Ronaldo",
    league: "La Liga",
    size: "XL",
    condition: 8,
    price: 79.99,
    notes:
      "Home shirt from a season which promised much but eventually ended in disappointment as Los Blancos' attempt to retain the Champions League ended at the semi-final stage. The side also ran out of steam in their pursuit of La Liga, with Carlo Ancelotti leaving at the end of the campaign",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-14-home-ronaldo_2_1_1_4_1_2_1_1_2_1_1_2_1_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-14-home_1_13_1_2_1_1_2_1_1_1_1.jpg",
    ],
  },
  {
    club: "Real Madrid",
    year: 1997,
    player: "Raul",
    league: "La Liga",
    size: "XL",
    condition: 7,
    price: 219.99,
    notes:
      "Rare home shirt as worn when Los Merengues were victorious in the UEFA Champions League under German head coach Jupp Heynckes. Real overcame defending champions Borussia Dortmund in the semi finals, before facing a star-studded Juventus line up containing the likes of Zinedine Zidane, Edgar Davids, Alessandro Del Piero and Filippo Inzaghi. A solitary goal from Yugoslavian international Predrag Mijatović in the 66th minute ensured the trophy would go to Spain. Domestically, Real could not retain their league title, settling for a disappointing fourth place. Young striker Fernando Morientes would top-score for Los Blancos with 16 goals in all competitions",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-97-home-raul-_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/e/real-madrid-97-home-new_1_1_2_1_1_2_2_1_2_1_1_2_3_1_2_1_1.jpg",
    ],
  },
  {
    club: "Olympique Marseille",
    year: 2021,
    player: null,
    league: "Ligue 1",
    size: "M",
    condition: 10,
    price: 79.99,
    notes:
      "Home shirt released for the 21/22 season. Les Phocéens will be looking to improve on their 5th placed finish in the 20/21 season with Argentine manager Jorge Sampaoli starting his first full season at the French club. Milik and Payet will once again be looking to spearhead the attack with the addition of hot shot young talent Kondrad de la Fuente",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/marseille-21-home-tags.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/marseille-21-home-close.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/marseille-21-home-back.jpg",
    ],
  },
  {
    club: "AC Milan",
    year: 2021,
    player: "Ibrahimovic",
    league: "Serie A",
    size: "L",
    condition: 10,
    price: 99.99,
    notes:
      "Home shirt for the upcoming season when the Rossoneri will hope to dethrone local rivals Inter as Serie A champions, while also competing in the UEFA Champions Leauge for the first time since the 2013-14 season. Milan have retained the services of enigmatic striker Zlatan Ibrahimović off the back of a prolific campaign in which he top-scored for the side",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-21-home-ibrahimovic.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-21-home-tags_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-21-home-tags-close_2.jpg",
    ],
  },
  {
    club: "AC Milan",
    year: 2021,
    player: "Rebic",
    league: "Serie A",
    size: "XL",
    condition: 10,
    price: 99.99,
    notes:
      "Home shirt for the upcoming season when the Rossoneri will hope to dethrone local rivals Inter as Serie A champions, while also competing in the UEFA Champions Leauge for the first time since the 2013-14 season. Milan have retained the services of enigmatic striker Zlatan Ibrahimović off the back of a prolific campaign in which he top-scored for the side",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-21-home-rebic.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-21-home-tags_2_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-21-home-tags-close_2_1.jpg",
    ],
  },
  {
    club: "AC Milan",
    year: 2021,
    player: null,
    league: "Serie A",
    size: "S",
    condition: 10,
    price: 79.99,
    notes:
      "Home shirt for the upcoming season when the Rossoneri will hope to dethrone local rivals Inter as Serie A champions, while also competing in the UEFA Champions Leauge for the first time since the 2013-14 season. Milan have retained the services of enigmatic striker Zlatan Ibrahimović off the back of a prolific campaign in which he top-scored for the side",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-21-home-tags.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-21-home-back.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-21-home-tags-close.jpg",
    ],
  },
  {
    club: "Sampdoria",
    year: 2021,
    player: null,
    league: "Serie A",
    size: "M",
    condition: 10,
    price: 79.99,
    notes:
      "Third shirt released for the upcoming season, when La Samp will hope to improve on their 9th place finish from the previous campaign and secure European football. Veteran striker Fabio Quagliarella will aim to become the club's top goalscorer for the sixth consecutive season at age of 39",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/a/sampdoria-21-third-tags.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/a/sampdoria-21-third-back.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/a/sampdoria-21-third-tags-close.jpg",
    ],
  },
  {
    club: "St Pauli",
    year: 2021,
    player: null,
    league: "Bundesliga",
    size: "M",
    condition: 10,
    price: 79.99,
    notes:
      "Away shirt released for the upcoming 2.Bundesliga season, when former St Pauli midfielder Timo Schultz will once again manage the side with hopes of challenging for promotion. St Pauli and Under Armour parted ways at the end of 2020/21 season and Kiezkicker decided to start their own brand Di!Y ('Do it yourself')",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/t/st-pauli-21-away-tags.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/t/st-pauli-21-away-back.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/t/st-pauli-21-away-tags-close.jpg",
    ],
  },
  {
    club: "St Pauli",
    year: 2021,
    player: null,
    league: "Bundesliga",
    size: "L",
    condition: 10,
    price: 79.99,
    notes:
      "Home shirt released for the upcoming 2.Bundesliga season, when former St Pauli midfielder Timo Schultz will once again manage the side with hopes of challenging for promotion. St Pauli and Under Armour parted ways at the end of 2020/21 season and Kiezkicker decided to start their own brand Di!Y ('Do it yourself')",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/t/st-pauli-21-home-tags_1_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/t/st-pauli-21-home-back_1_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/t/st-pauli-21-home-close_1_2.jpg",
    ],
  },
  {
    club: "St Pauli",
    year: 2021,
    player: null,
    league: "Bundesliga",
    size: "S",
    condition: 10,
    price: 79.99,
    notes:
      "Special edition away shirt featuring 'Kein Fussball den Faschisten' (No Football for Fascists) chest sponsor as part of the club's ongoing stance against fascism, as worn during the side's final home game of the season, a 2-1 loss to Hannover. Three consecutive defeats to end the season gave St Pauli a 10th place finish in the 2.Bundesliga, with the Hamburg-based outfit having been in position to make a run at promotion just a few months earlier",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/t/st-pauli-21-away-nofascists-tags.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/t/st-pauli-21-away-nofascists-back.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/t/st-pauli-21-away-nofascists-tags-close.jpg",
    ],
  },
  {
    club: "Southampton",
    year: 2021,
    player: null,
    league: "Premier League",
    size: "S",
    condition: 10,
    price: 79.99,
    notes:
      "Home shirt released for the upcoming season, when the Saints will hope for more stability and a chance at European qualification under manager Ralph Hasenhüttl, having started the previous season on fire but ultimately settled in 15th. The shirt is the first released in a new partnership with Hummel, and features various tributes to the club's DNA and origins including references to iconic Southampton stadiums St Mary's and The Dell",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/o/southampton-21-home-tags.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/o/southampton-21-home-back.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/o/southampton-21-home-tags-close.jpg",
    ],
  },
  {
    club: "Manchester United",
    year: 2021,
    player: null,
    league: "Premier League",
    size: "M",
    condition: 10,
    price: 89.99,
    notes:
      "Youth. Courage. Success. The three pillars of Manchester United's motto have brought the club more than a century of triumphs. With its clean red design and white ribbed crewneck, this adidas home jersey takes inspiration from the iconic kit that carried them to some of their most memorable moments. Made for fans, its soft fabric and moisture-absorbing AEROREADY will keep you comfortable as a new generation of players target supremacy. A woven badge on the chest and devil signoff under the back collar put your football loyalty on display.",
    imageUrl: [
      "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2021-22_ss4_p-12075390+pv-1+u-c2vvn7pxk9iy5ouai93m+v-fd251bf031d44089956d3e205932018e.jpg?_hv=1&w=900",
      "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2021-22_ss4_p-12075390+pv-2+u-c2vvn7pxk9iy5ouai93m+v-adc1fe851898409c982d68cd5af476a1.jpg?_hv=1&w=900",
      "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2021-22_ss4_p-12075390+u-c2vvn7pxk9iy5ouai93m+v-e56845f24796473eb9622895a682db3d.jpg?_hv=1&w=900",
    ],
  },
  {
    club: "Arsenal",
    year: 2021,
    player: null,
    league: "Premier League",
    size: "L",
    condition: 10,
    price: 89.99,
    notes:
      "Designed to give the Gunners superiority on the pitch, Arsenal fans get a crisp new look for the upcoming season. Made with adidas' AEROREADY technology, the shirt is a replica of the one worn by the team on home matchdays. The traditional red is accented with navy and white trims, bringing back memories of the club's shirts of the late 1990s/early 2000s.",
    imageUrl: [
      "https://images.footballfanatics.com/arsenal/arsenal-home-shirt-2021-22_ss4_p-12053433+pv-1+u-1avq8ji9qg1bm52vn3w1+v-ef4faaecddef4411a1664930f73a6647.jpg?_hv=1&w=900",
      "https://images.footballfanatics.com/arsenal/arsenal-home-shirt-2021-22_ss4_p-12053433+pv-2+u-1avq8ji9qg1bm52vn3w1+v-bb895b8f406f4f94bd805035a476a62d.jpg?_hv=1&w=900",
      "https://images.footballfanatics.com/arsenal/arsenal-home-shirt-2021-22_ss4_p-12053433+u-1avq8ji9qg1bm52vn3w1+v-0255292a1a6b4da5ac22f279906585b1.jpg?_hv=1&w=900",
    ],
  },
  {
    club: "Manchester United",
    year: 1990,
    player: null,
    league: "Premier League",
    size: "M",
    condition: 8,
    price: 389.99,
    notes:
      "Classic United away shirt worn from 1990-92. The stand out design paired with the iconic Sharp sponsor have made this shirt a must-have for any collector. This away shirt was notably worn in the 6-2 win at Arsenal, and the 1992 League Cup final, where a goal from Brian McClair helped United beat Notts Forest 1-0 at Wembley.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-90-away_1_2_2_2_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-90-away-premium-1_1_1_2_2_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/m/a/man-united-90-away-premium-4_1_1_2_2_1_1.jpg",
    ],
  },
  {
    club: "AC Milan",
    year: 2008,
    player: "Nesta",
    league: "Serie A",
    size: "XL",
    condition: 7,
    price: 129.99,
    notes:
      "Third shirt from the last season of Carlo Ancelotti's reign as manager, the side finished 3rd in Serie A and qualified for the Champions League after competiting in the in UEFA Cup this season. Nesta made only 1 appearance this season after struggling with serious back injuries which put his career in doubt. However the Italian made his comeback in the final away game of the season against Fiorentina.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-08-third-nesta_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-08-third-patcheswear_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-08-third-patcheswear-close_1.jpg",
    ],
  },
  {
    club: "AC Milan",
    year: 1992,
    player: null,
    league: "Serie A",
    size: "XL",
    condition: 8,
    price: 329.99,
    notes:
      "Extremely rare Adidas home shirt only worn for one season when the side retained their Serie A title but lost out to Marseille in the European Cup Final",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-92-home-ls-premium_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-92-home-ls-back-new_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-92-home-ls-close-new_1.jpg",
    ],
  },
  {
    club: "AC Milan",
    year: 2003,
    player: "Shevchenko",
    league: "Serie A",
    size: "M",
    condition: 8,
    price: 139.99,
    notes:
      "Home shirt as worn by Sheva when the side attempted to defend their Champions League title but were left stunned by Deportivo in the Quarter Finals after the Spanish side overturned a 4-1 first leg deficit to progress",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-03-home-pi-shev_4_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/c/ac-milan-03-home_9_3_2_1_1_1_4_2_1_1.jpg",
    ],
  },
  {
    club: "Fiorentina",
    year: 1991,
    player: null,
    league: "Serie A",
    size: "L",
    condition: 8,
    price: 209.99,
    notes:
      "Rare home shirt with classic Giocheria sponsor as worn by Batigol in his first season in Florence when he scored 13 goals in 27 games",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/700x700/0dc2d03fe217f8c83829496872af24a0/f/i/fiorentina-91-home-mi_3_1_3_1.jpg",
    ],
  },
  {
    club: "Fiorentina",
    year: 1996,
    player: null,
    league: "Serie A",
    size: "XL",
    condition: 7,
    price: 179.99,
    notes:
      "Very rare classic design away shirt as worn during Claudio Ranieri's final season as manager the La Viola reached the Cup Winners Cup Semi-Finals. Batigol scored a great goal in the 1st leg against Barcelona but the side were ultimately undone by the Catalans back in Florence",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/700x700/0dc2d03fe217f8c83829496872af24a0/f/i/fiorentina-96-away_1_1_2_1.jpg",
    ],
  },
  {
    club: "Fiorentina",
    year: 2013,
    player: "Gomez",
    league: "Serie A",
    size: "M",
    condition: 8,
    price: 99.99,
    notes:
      "Home shirt as worn when the Viola reached the Coppa Italia Final, looking to claim their first major trophy in 13 years, but were defeated by a strong Napoli side. In Serie A boss Vincenzo Montella guided them to a respectable 4th place finish. Gómez sustained an injury that limited his appearances in his first season from Bayern Munich. Managing to score 4 in 15 appearances, he remained at the club for one more season before heading out on loan to Turkish side Besiktas",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/f/i/fiorentina-13-home-gomez_6.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/f/i/fiorentina-13-home_2_6.jpg",
    ],
  },
  {
    club: "Fiorentina",
    year: 2005,
    player: "Guigou",
    league: "Serie A",
    size: "M",
    condition: 7,
    price: 169.99,
    notes:
      "Very rare player shirt believed to have been issued to or worn by Guigou during the 2005-06 season. The defender had joined La Viola from Roma the previous season but struggled for game time featuring just 6 times in his first campaign at the Artemio Franchi. This year wasn't much better for the Uruguayan as he made 5 appearances before being loaned out to bottom side Treviso in January . Fiorentina themselves finished fourth in Serie A but were demoted to 9th following their role in the Calciopoli scandal. Guigou opted to join Treviso permanently at the end of the season and would spend another 3 seasons in Italy before returning to Uruguay and the club he started out with, Nacional. The 41 time international had won the Serie A title with Roma in 2000 and had also been a runner-up at the 1999 Copa América with his country.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/f/i/fiorentina-05-home-mw-guigou-back.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/f/i/fiorentina-05-home-mw-guigou-front.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/f/i/fiorentina-05-home-mw-guigou-close.jpg",
    ],
  },
  {
    club: "Inter Milan",
    year: 1997,
    player: "Ronaldo",
    league: "Serie A",
    size: "XL",
    condition: 9,
    price: 369.99,
    notes:
      "Home shirt as worn in Ronaldo's first season at the club following a world record switch from Barcelona. The Brazilian was crowned with the Ballon d'Or in 1997 and hit a superb 34 goals in all competitions as he fired Inter close to the Serie A title",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/i/n/inter-97-home-ronaldo_1_2_3_1_1_1_2_2_1_1_1_1_4_1_1_1_1_2_2_1_2_2_2_2_1_1_2_1_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/i/n/inter-97-home-_1_5_2_1_1_1_1.jpg",
    ],
  },
  {
    club: "Inter Milan",
    year: 2010,
    player: "Lucio",
    league: "Serie A",
    size: "XL",
    condition: 10,
    price: 209.99,
    notes:
      "Away shirt as worn when Inter won the FIFA World Club Cup under new boss Rafa Benitez, this style of shirt was used in the Semi-Final where the Nerazzurri thrashed Seongnam 3-0 to reach the Final. It was to be one of Benitez's last acts as manager as he was replaced by Leonardo",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/i/n/inter-10-away-tags-lucio_2_1_1_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1352x/0dc2d03fe217f8c83829496872af24a0/i/n/inter-10-away-shirt-wtags_1.jpg",
    ],
  },
  {
    club: "Inter Milan",
    year: 2008,
    player: "Ibrahimovic",
    league: "Serie A",
    size: "S",
    condition: 9,
    price: 109.99,
    notes:
      "Away shirt as worn by Ibrahimović in José Mourinho's first season in charge when he guided the side to another Serie A title. Ibrahimović performed one of the most spectacular passes ever seen on a football field in this design. The Swedish hitman finished top scorer in all competitions with 26 goals",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/i/n/inter-08-away-ibrahimovic_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/i/n/inter-08-away_2_2_1_1_2_1_2_1_1_1_.jpg",
    ],
  },
  {
    club: "Inter Milan",
    year: 2008,
    player: "Figo",
    league: "Serie A",
    size: "XL",
    condition: 9,
    price: 139.99,
    notes:
      "Away shirt as worn by Figo in Jose Mourinho's first season in charge when he guided the side to their 4th consecutive Scudetto. This was to be the Portuguese legend's final season in professional football",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/i/n/inter-08-away-figo_2_1_4_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/i/n/inter-08-away-scud_1_1_1_1.jpg",
    ],
  },
  {
    club: "Juventus",
    year: 2003,
    player: "Nedved",
    league: "Serie A",
    size: "S",
    condition: 7,
    price: 139.99,
    notes:
      "Third shirt as worn by Pavel Nedvěd when he won the Ballon d'Or. This was Marcello Lippi's final season in charge of the club after a distant third place Serie A finish.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/j/u/juventus-03-third-nedved-new.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/j/u/juventus-03-third-new_1.jpg",
    ],
  },
  {
    club: "Juventus",
    year: 2014,
    player: "Pogba",
    league: "Serie A",
    size: "L",
    condition: 7,
    price: 129.99,
    notes:
      "Away shirt as worn when the Bianconeri famously reached their first Champions League final since 2003 after dumping out holders Real Madrid in the semi-final. In the Berlin showpiece they ran a rampant Barcelona close but eventually lost out 3-1, just missing out on a historic treble in Massimiliano Allegri's first season in charge after earlier clinching the Coppa Italia and fourth successive Scudetto title",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/j/u/juventus-14-away-pogba_1_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/j/u/juventus-14-away-noscud.jpg",
    ],
  },
  {
    club: "Juventus",
    year: 2002,
    player: "Del Piero",
    league: "Serie A",
    size: "XL",
    condition: 7,
    price: 139.99,
    notes:
      "Away shirt as worn when the side retained their Serie A title, finishing 7 points clear of runners-up Inter",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/j/u/juventus-02-away-del-piero_4_1_1_2_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/j/u/juventus-02-away_3_1_1_2_1.jpg",
    ],
  },
  {
    club: "Juventus",
    year: 2018,
    player: "Ronaldo",
    league: "Serie A",
    size: "L",
    condition: 10,
    price: 59.99,
    notes:
      "Away shirt as worn when The Old Lady retained the Serie A title for the 8th consecutive time following the signing of Portuguese superstar Cristiano Ronaldo for a club record fee of €100M. The club fell short in the Champions League as they were shocked by Ajax in the Quarter-finals",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/743x/0dc2d03fe217f8c83829496872af24a0/j/u/juventus-18-away-ronaldo_1_4.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/j/u/juventus-18-away-tags_3_1_4.jpg",
    ],
  },
  {
    club: "Napoli",
    year: 2018,
    player: "Insigne",
    league: "Serie A",
    size: "M",
    condition: 10,
    price: 69.99,
    notes:
      "Player specification third shirt as worn during the season in which the side finished runners up to Juventus for the 4th time since the 2012-13 campaign with Carlo Ancelotti taking over from Maurizio Sarri as manager. The side were eliminated from the Champions League Group Stage after a final gameweek loss to eventual champions Liverpool. The side then progressed to the Quarter Finals of the Europa League before being defeated by Arsenal",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/n/a/napoli-18-third-auth-insigne.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/n/a/napoli-18-third-auth-tags2_1_1_1.jpg",
    ],
  },
  {
    club: "Napoli",
    year: 2017,
    player: "Mertens",
    league: "Serie A",
    size: "L",
    condition: 10,
    price: 59.99,
    notes:
      "Authentic home shirt designed for use in European competition in the season when the side achieved an impressive tally of 91 points, this was not enough however for Maurizio Sarri's side to seal their first title in 28 years as they finished as runners-up in Serie A. In Europe the side crashed out of the Champions League at the group stage but did manage a Europa League place thanks to their 3rd place in the group. They reached the Round of 32 in the Europa League, losing out to RB Leipzig",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/n/a/napoli-17-home-eu-ls-mertens.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/n/a/napoli-17-home-eu-ls-tags_2_1.jpg",
    ],
  },
  {
    club: "Roma",
    year: 2014,
    player: "De Rossi",
    league: "Serie A",
    size: "L",
    condition: 7,
    price: 99.99,
    notes:
      "Home shirt as worn by the Giallorossi in the first season of their new kit deal with Nike. Rudi Garcia's side had to settle for being runners-up in Serie A once again and ended up in the Europa League after defeats to Bayern and Man City in the Champions League group stage",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/o/roma-14-home-derosi_1_2_1_1_1_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/o/roma-14-home-_4_2_1_1_1_1_1_1_1_1_2.jpg",
    ],
  },
  {
    club: "Roma",
    year: 2000,
    player: "Cafu",
    league: "Serie A",
    size: "XL",
    condition: 5,
    price: 149.99,
    notes:
      "Classic tight-fit design home shirt as worn in the season when the club won their third Scudetto on a thrilling final day. Cafu continued to be a dominant force in both attack and defence down the right hand side. The hardworking full back played 40 times this campaign",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/n/v/nvc_10091_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/n/v/nvc_10089_1.jpg",
    ],
  },
  {
    club: "Roma",
    year: 2015,
    player: "Totti",
    league: "Serie A",
    size: "S",
    condition: 10,
    price: 89.99,
    notes:
      "Third shirt as worn in the season when Luciano Spalletti returned to the Stadio Olimpico and guided the side to a comfortable 3rd place finish in Serie A and lost out in the Champions League to eventual winners Real Madrid",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/o/roma-15-third-tags-totti_3_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/r/o/roma-15-third-tags_5_1_2_1.jpg",
    ],
  },
  {
    club: "Liverpool",
    year: 2021,
    player: null,
    league: "Premier League",
    size: "M",
    condition: 10,
    price: 79.99,
    notes:
      "Crafted in stone and celebrated in style, LFC supporters will bring back memories of Barnes, Fowler and McManaman with this away stadium shirt from Nike. Inspired by the 96/97 season design, the shirt sees a dark atomic teal and crimson appear on both the collar and cuffs. While the patented Dri-FIT technology, meaning supporters get the same feel as the players do on an away matchday – one of being cool and dry when the Reds crank it up a notch.",
    imageUrl: [
      "https://store.liverpoolfc.com/media/catalog/product/cache/dd504f005c0b90ffe1b9fb2344db1a87/d/b/db2566e_a.jpg",
      "https://store.liverpoolfc.com/media/catalog/product/cache/dd504f005c0b90ffe1b9fb2344db1a87/d/b/db2566e_b.jpg",
    ],
  },
  {
    club: "Liverpool",
    year: 2021,
    player: null,
    league: "Premier League",
    size: "M",
    condition: 10,
    price: 79.99,
    notes:
      "Crafted in stone and celebrated in style, LFC supporters will bring back memories of Barnes, Fowler and McManaman with this away stadium shirt from Nike. Inspired by the 96/97 season design, the shirt sees a dark atomic teal and crimson appear on both the collar and cuffs. While the patented Dri-FIT technology, meaning supporters get the same feel as the players do on an away matchday – one of being cool and dry when the Reds crank it up a notch.",
    imageUrl: [
      "https://store.liverpoolfc.com/media/catalog/product/cache/dd504f005c0b90ffe1b9fb2344db1a87/d/b/db2560r_a.jpg",
    ],
  },
  {
    club: "Olympique Lyon",
    year: 2021,
    player: null,
    league: "Ligue 1",
    size: "M",
    condition: 10,
    price: 79.99,
    notes:
      "The Groupama Stadium isn't the only place in Lyon where creativity flourishes. This adidas Olympique Lyonnais Away Jersey takes its artistic inspiration from the camo-style graffiti plastered on buildings and walls around the city. Built to keep players and fans comfortable, it has soft fabric and moisture-absorbing AEROREADY. The woven badge flashes the perfect football finish.",
    imageUrl: [
      "https://cdn1.uksoccershop.com/images/cache/re_1624877954_lyon-away-shirt-red-475x0.webp",
      "https://cdn1.uksoccershop.com/images/cache/adtnl_prodts_img/re_1624877954_lyon-away-shirt-red-back-475x0.jpg",
    ],
  },
  {
    club: "Tottenham",
    year: 2021,
    player: null,
    league: "Premier League",
    size: "M",
    condition: 10,
    price: 99.99,
    notes:
      "Exceptional fit, ground-breaking fabric technology, and plenty of club pride make this adult Tottenham Hotspur away shirt 2021/22 a stand-out piece of kit for any fan. A replica of the kit worn by the professionals, the striking black colourway sets it apart from other seasons designs. The use of Nikes innovative Dri-FIT and Nike Breathe fabric ensures sweat and moisture is moved away from the skin for a cooler, fresher feel. The standard-fit provides a relaxed, easy feel, and the use of 100% recycled polyester is both easy to care for with a machine wash, and kinder to the planet, too.",
    imageUrl: [
      "https://cdn1.uksoccershop.com/images/cache/re_1627028460_tottenham-away-shirt-21-22-475x0.webp",
      "https://cdn1.uksoccershop.com/images/cache/adtnl_prodts_img/re_1627028460_tottenham-away-shirt-21-22-back-475x0.jpg",
    ],
  },
  {
    club: "Dortmund",
    year: 2021,
    player: null,
    league: "Bundesliga",
    size: "L",
    condition: 10,
    price: 99.99,
    notes: "BVB away shirt for the 21/22 season",
    imageUrl: [
      "https://cdn1.uksoccershop.com/images/cache/re_1627030632_bvb-away-shirt-21-22-for-kids-475x0.webp",
      "https://cdn1.uksoccershop.com/images/cache/adtnl_prodts_img/re_1627030632_bvb-away-shirt-21-22-for-kids-bacck-475x0.jpg",
    ],
  },
  {
    club: "Juventus",
    year: 2021,
    player: null,
    league: "Serie A",
    size: "M",
    condition: 10,
    price: 99.99,
    notes: "Juventus away shirt for the 21/22 season",
    imageUrl: [
      "https://cdn1.uksoccershop.com/images/cache/re_1627031829_juventus-away-jersey-2021-22-475x0.webp",
      "https://cdn1.uksoccershop.com/images/cache/adtnl_prodts_img/re_1627031829_juventus-away-jersey-2021-22-back-475x0.jpg",
    ],
  },
  {
    club: "Inter Milan",
    year: 2021,
    player: null,
    league: "Serie A",
    size: "M",
    condition: 10,
    price: 99.99,
    notes: "Inter Milan away shirt for the 21/22 season",
    imageUrl: [
      "https://cdn1.uksoccershop.com/images/cache/re_1626183322_inter-home-stadium-jersey-2021-22-475x0.webp",
      "https://cdn1.uksoccershop.com/images/cache/adtnl_prodts_img/re_1626183322_inter-home-stadium-jersey-2021-22-back-475x0.jpg",
    ],
  },
  {
    club: "Arsenal",
    year: 2021,
    player: null,
    league: "Premier League",
    size: "L",
    condition: 10,
    price: 99.99,
    notes:
      "From sealing the double in 1971 to delivering that final blow in 1989. Some of Arsenal's greatest soccer memories are highlighted in yellow. adidas brought that classic color back for this juniors' away jersey, adding a woven cannon for a further shot of vintage Gunners style. Made to keep fans comfortable, it combines soft fabric and moisture-wicking AEROREADY.",
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b30ac0c8a7da42a6ae0dace100aaa9d8_9366/Arsenal_21-22_Away_Jersey_Yellow_GQ3253_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0184a32d73e34571ab9eace100aaafe7_9366/Arsenal_21-22_Away_Jersey_Yellow_GQ3253_02_laydown_hover.jpg",
    ],
  },
  {
    club: "Bayern Munich",
    year: 2021,
    player: null,
    league: "Bundesliga",
    size: "L",
    condition: 10,
    price: 99.99,
    notes:
      "An away jersey doesn't only represent a club, it reflects the place they call home. This adidas FC Bayern soccer jersey is inspired by the Munich Child, a symbol of the city. The lightweight fabric has heat-transfer details and a small coat of arms on the back neck. It's built for performance with HEAT.RDY that maximizes airflow, so you feel cool.",
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7cc4d4fc442140208e89acfc01364f17_9366/FC_Bayern_21-22_Away_Authentic_Jersey_Black_GM5312_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5dabddd30a2047849cd9ad2d001187ec_9366/FC_Bayern_21-22_Away_Authentic_Jersey_Black_GM5312_02_laydown.jpg",
    ],
  },
  {
    club: "Real Madrid",
    year: 2021,
    player: null,
    league: "La Liga",
    size: "M",
    condition: 10,
    price: 99.99,
    notes:
      "They win on the pitch. But the Plaza de Cibeles is where they celebrate with their soccer family. The concentric circles and spiral pattern of the fountain in Madrid's famous square inspired this adidas Real Madrid jersey's design. Made for fans, this shirt will keep you comfortable with soft fabric and moisture-absorbing AEROREADY.",
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a4ebccafc3c6487ca477acda00f25d5f_9366/Real_Madrid_21-22_Home_Jersey_White_GQ1359_01_laydown.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7595b6211bd94e0f8b61ad2d01134efa_9366/Real_Madrid_21-22_Home_Jersey_White_GQ1359_02_laydown.jpg",
    ],
  },
  {
    club: "Barcelona",
    year: 2021,
    player: null,
    league: "La Liga",
    size: "M",
    condition: 10,
    price: 99.99,
    notes:
      "Barcelona – as they do – go where no club has gone before. The “purple pulse” color palette plays host to an iridescent club and Nike crest on the chest. Yes, a shiny, reflective badge application on a professional soccer kit. Nike didn’t hold back. The jersey is meant to be a kit for everyone, one driving unity and togetherness, because, after all – tots units fem forca.",
    imageUrl: [
      "https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=2000&h=2000&cmp=100&c=999&img=A1055663000&iset=0108&iindex=0007",
      "https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=2000&h=2000&cmp=100&c=999&img=A1055663000&iset=0108&iindex=0009",
    ],
  },
  {
    club: "Machester City",
    year: 2021,
    player: null,
    league: "Premier League",
    size: "M",
    condition: 10,
    price: 99.99,
    notes:
      "Maybe it’s the moment that made you a fan. Maybe it’s the sporting moment that you’ll truly never forget, that you’ll tell your children about some day. Either way, the 21/22 Manchester City home jersey is a must have for any city fan – representing the moment that City transcended in more ways than one. First, on the inside neck you’ll find “93:20” the exact moment Sergio Aguero’s strike hit the back of the net. Layered over the 20 in that back neck signoff is an off-colored ’10,’ representative of Aguero’s shirt number at the time. Finally, an all-over graphic pattern is constructed of scoreboard style bars and shapes, remembering forever the moment we all shouted Aguerooooooooooooooooo",
    imageUrl: [
      "https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=2000&h=2000&cmp=100&c=999&img=A1053362000&iset=0108&iindex=0007",
      "https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=2000&h=2000&cmp=100&c=999&img=A1053362000&iset=0108&iindex=0009",
    ],
  },
  {
    club: "Ajax",
    year: 2021,
    player: null,
    league: "Eredivisie",
    size: "S",
    condition: 10,
    price: 99.99,
    notes:
      "adidas and Ajax partner up to remember some historic Ajax sides of the past – a thinner, dark red center stripe is present here on the new home shirt, reminiscent of the great sides of 70s, while the big call out on the Amsterdam club’s new jersey is the crest. On the thirty year anniversary of its update, the retro Ajax crest returns to center stage, not relegated to the away or third, but on full display on the club’s main kit. Remembered in history, honored in the present.",
    imageUrl: [
      "https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=2000&h=2000&cmp=100&c=999&img=A1052963000&iset=0108&iindex=0007",
      "https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=2000&h=2000&cmp=100&c=999&img=A1052963000&iset=0108&iindex=0009",
      "https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=2000&h=2000&cmp=100&c=999&img=A1052963000&iset=0108&iindex=0040",
    ],
  },
  {
    club: "Atletico Madrid",
    year: 2021,
    player: null,
    league: "La Liga",
    size: "L",
    condition: 10,
    price: 99.99,
    notes:
      "You can never ditch the Atleti stripes. Nike would never – here, on the new 21/22 home top, they’ve played with the execution, using a tattered, distressed look to add a touch of vibrancy and panache to a kit we’re all so accustomed to. You can’t change a classic – but you can add just enough style and flair to make it fresh.",
    imageUrl: [
      "https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=2000&h=2000&cmp=100&c=999&img=A1051756000&iset=0108&iindex=0007",
    ],
  },
  {
    club: "Marseille",
    year: 2021,
    player: null,
    league: "Ligue 1",
    size: "S",
    condition: 10,
    price: 99.99,
    notes:
      "A gorgeous dark color combo and a stunner of a design make this a top tier away jersey for Marseille ahead of the 21/22 season, with chevron designs forming an “M” pattern across the kit. You know what the “M” stands for, don’t you? March with the Marseille army in the latest from PUMA.",
    imageUrl: [
      "https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=2000&h=2000&cmp=100&c=999&img=A1053364000&iset=0108&iindex=0007",
      "https://www.imagehandler.net/preview/?istyle=0000&fmt=jpg&w=2000&h=2000&cmp=100&c=999&img=A1053364000&iset=0108&iindex=0009",
    ],
  },
  {
    club: "Arsenal",
    year: 2004,
    player: "Henry",
    league: "Premier League",
    size: "L",
    condition: 8,
    price: 149.99,
    notes:
      "Home shirt as worn by the legendary striker when the Gunners lifted the FA Cup and Henry retained his European Golden Boot title, this time sharing it with Diego Forlan as both scored 31 league goals",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-04-home-henry_1_2_1_1_1_1_2_1_1_2_1_1_1_1_1_1_1_2_2_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-04-home_3_12_1_1_2_2_1_1_1_1_1_1_1_1_2_2_1.jpg",
    ],
  },
  {
    club: "Arsenal",
    year: 1992,
    player: null,
    league: "Premier League",
    size: "S",
    condition: 6,
    price: 349.99,
    notes:
      "Famous 'bruised banana' design away kit worn from 1991 to 1993. This shirt has become one of Adidas's most iconic templates and has gone on to inspire art, fashion and numerous 'copycat' kits. George Graham's side failed to win a trophy during the shirts debut season, falling out the F.A and League Cup at the third round stage and finishing 4th in the First Division. The second season brought more success as The Gooners won both domestic cup competitions, however they slumped to a 10th place finish in the Premier Leagues foundation season. The design was also memorably worn when Ian Wright scored a hat-trick on his league debut away to Southampton. This was the last Adidas shirt to sport the 'trefoil' logo in English football",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-91-away-hof_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-91-away-back-hof_2.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-91-away-hof2_2.jpg",
    ],
  },
  {
    club: "Arsenal",
    year: 2002,
    player: "Pires",
    league: "Premier League",
    size: "L",
    condition: 8,
    price: 229.99,
    notes:
      "Away shirt as worn by Pirès during the campaign Arsenal became the first team in over a century to perform a 'perfect' unbeaten season, being dubbed 'The Invincibles'. The skilful winger developed a formidable partnership with Thierry Henry and contributed 14 Premiership goals in 2003/04 as the Gunners made history",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-02-away-ls-pires-pslex_2_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-02-away-ls_3_1_1_1_2_1_1_1.jpg",
    ],
  },
  {
    club: "Arsenal",
    year: 1994,
    player: "Winterburn",
    league: "Premier League",
    size: "L",
    condition: 8,
    price: 229.99,
    notes:
      "Extremely rare player shirt believed to have been issued to Winterburn in the 1994-95 season. The left-back moved to Highbury in '87 from Wimbledon and went on to become a fixture of the famed back four for 13 years. In this campaign the full back made the most appearances in a single season in his Arsenal career, playing 57 times as the side reached the Cup Winners Cup Final but finished down in 12th place in the league. He stayed with the side until 2000 when after winning 3 top flight titles and two FA Cups he joined West Ham as a lengthy career winded down. This shirt is a replica specification shirt and is thought that the kitroom ran out of player shirts and were forced to customise replica versions in some instances.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-94-away-mw-winterburn-back_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-94-away-mw-winterburn-front_1_1_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-94-away-mw-winterburn-close_1_1_1.jpg",
    ],
  },
  {
    club: "Arsenal",
    year: 2019,
    player: "Tierney",
    league: "Premier League",
    size: "S",
    condition: 10,
    price: 79.99,
    notes:
      "Away shirt as worn when the Gunners failed to impose their will on the Premier League, sacking manager Unai Emery in November after a string of poor results and ultimately finishing in a lowly 8th position. Hotly-tipped former Arsenal man Mikel Arteta was his replacement, he brought some joy and optimism back to the Emirates with a record 14th FA Cup win. This design was inspired by the famous 'bruised banana' away shirt from 1991/93 seasons",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-19-away-tierney.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-19-away-tags_2.jpg",
    ],
  },
  {
    club: "Arsenal",
    year: 2019,
    player: "Martinelli",
    league: "Premier League",
    size: "S",
    condition: 10,
    price: 79.99,
    notes:
      "Away shirt as worn when the Gunners failed to impose their will on the Premier League, sacking manager Unai Emery in November after a string of poor results and ultimately finishing in a lowly 8th position. Hotly-tipped former Arsenal man Mikel Arteta was his replacement, he brought some joy and optimism back to the Emirates with a record 14th FA Cup win. This design was inspired by the famous 'bruised banana' away shirt from 1991/93 seasons",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-19-away-martinelli.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/r/arsenal-19-away-tags_2_1_1_1.jpg",
    ],
  },
  {
    club: "Valencia",
    year: 2010,
    player: "Soldado",
    league: "La Liga",
    size: "L",
    condition: 8,
    price: 79.99,
    notes:
      "Home shirt as worn in the season when the side finished 3rd place in La Liga and reached the Champions League last 16",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/700x/0dc2d03fe217f8c83829496872af24a0/v/a/valencia-10-home-ls-mw-tags-soldado_5.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/v/a/valencia-10-home-pi-ls-nolfp_2.jpg",
    ],
  },
  {
    club: "Valencia",
    year: 2010,
    player: "Topal",
    league: "La Liga",
    size: "S",
    condition: 8,
    price: 59.99,
    notes:
      "Third shirt as worn when Los Che finished 3rd in La Liga under talented coach Unai Emery. The side reached the round of 16 in both the Champions League and Copa del Rey. Topal featured 29 times for the side this campaign in his first year of a two year spell",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/c/r/crail13_12_11_2020_lb0515.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/c/r/crail13_12_11_2020_lb0513.jpg",
    ],
  },
  {
    club: "Valencia",
    year: 2002,
    player: "Torres",
    league: "La Liga",
    size: "L",
    condition: 10,
    price: 139.99,
    notes:
      "Very rare player shirt believed to have been issued to Torres in the 2002-03 season as Lose Che reached the Champions League Quarter Finals and came 5th place in La Liga",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/v/a/valencia-02-home-pi-ls-torres-23.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/v/a/valencia-02-home-pi-ls-tags_5.jpg",
    ],
  },
  {
    club: "Atalanta",
    year: 2020,
    player: null,
    league: "Serie A",
    size: "L",
    condition: 10,
    price: 59.99,
    notes:
      "Sponsorless home shirt as worn when La Dea hoped to build on the remarkable season they'd enjoyed a year earlier, reprising their hyper-aggressive blitzing style in the hopes of bringing home their first ever Serie A title. Colombian marksmen Luis Muriel and Duván Zapata once again began the campaign in fine form, each reaching double-digit goalscoring tallies by the turn of the year, as the side replicated their exact points tally and position from the prior season with a third place finish",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/t/atalanta-20-home-ns-tags_5.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/t/atalanta-20-home-ns-back_5.jpg",
    ],
  },
  {
    club: "Atalanta",
    year: 2000,
    player: null,
    league: "Serie A",
    size: "M",
    condition: 7,
    price: 119.99,
    notes:
      "Classic design goalkeeper shirt as worn when Giovanni Vavassori guided the side to an impressive 7th place finish. Ivan Pelizzoli was the main 'keeper this season appearing in 37 games",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/t/atalanta-00-gk-shirt_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/t/atalanta-00-gk-shirt-closeup_1.jpg",
    ],
  },
  {
    club: "Atalanta",
    year: 2000,
    player: null,
    league: "Serie A",
    size: "M",
    condition: 8,
    price: 119.99,
    notes:
      "Classic design goalkeeper shirt as worn when Giovanni Vavassori guided the side to an impressive 7th place finish. Ivan Pelizzoli was the main 'keeper this season appearing in 37 games",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/t/atalanta-00-gk-shirt_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/t/atalanta-00-gk-shirt-closeup_1.jpg",
    ],
  },
  {
    club: "Atalanta",
    year: 1998,
    player: "Cossato",
    league: "Serie A",
    size: "XL",
    condition: 7,
    price: 129.99,
    notes:
      "Rare home shirt as worn when the side pushed for promotion to Serie A but had to settle for 6th place, also reaching the Coppa Italia Quarter Finals. Cossato featured 24 times for the side but could only find the net on two occasions",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/c/r/crail13_12_11_2020_lb0407.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/c/r/crail13_12_11_2020_lb0405.jpg",
    ],
  },
  {
    club: "Atalanta",
    year: 1999,
    player: "Rossini",
    league: "Serie A",
    size: "L",
    condition: 7,
    price: 129.99,
    notes:
      "Rare player shirt believed to have been issued to or worn by Rossini for the 1999-00 season as La Dea won promotion to Serie A with a 2nd place finish with Rossini scoring 3 in 25 games including the opener with a well-directed header in a 4-0 thrashing of Fermana",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/t/atalanta-99-home-mw-ls-rossini-reverse.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/a/t/atalanta-99-home-mw-ls-rossini-front.jpg",
    ],
  },
  {
    club: "Lazio",
    year: 2020,
    player: "Immobile",
    league: "Serie A",
    size: "M",
    condition: 10,
    price: 99.99,
    notes:
      "Special Champions League home shirt released for use in European competition, where Le Aquile performed well in a difficult group stage before running into reigning champions Bayern Munich in the first knockout round, losing out 6-2 on aggregate to the Bayern buzzsaw. Domestically, the Blue and Whites pushed for Champions League contention without ever really threatening a title run. This design is reminiscent of the 120 Year Anniversary classic released earlier in the year, although this time featuring a gold trim, and comes in a stylish box",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/l/a/lazio-20-home-cl-immobile.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/l/a/lazio-20-home-cl-tags_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/thumbnail/700x700/0dc2d03fe217f8c83829496872af24a0/l/a/lazio-20-home-cl-patches-box-top_2_1.jpg",
    ],
  },
  {
    club: "Lazio",
    year: 2001,
    player: "Stam",
    league: "Serie A",
    size: "L",
    condition: 8,
    price: 199.99,
    notes:
      "Rare shirt only worn in the Champions League during the 2001-02 campaign when the side surprisingly finished bottom of Group D after defeats to Galatasaray, Nantes & PSV. Stam joined Lazio early in the 01-02 season but missed 4 months of action due to testing positive for the steroid nandrolone along with Pep Guardiola of Brescia, after his return, Stam went on to make 70 appearances for Lazio before joining AC Milan in 2004.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/750x/0dc2d03fe217f8c83829496872af24a0/l/a/lazio-01-euro-home-stam-use_2_1.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/thumbnail/700x700/0dc2d03fe217f8c83829496872af24a0/l/a/lazio-01-euro-home-use_1_1_1_2_1.jpg",
    ],
  },
  {
    club: "Sampdoria",
    year: 2006,
    player: "Ziegler",
    league: "Serie A",
    size: "L",
    condition: 8,
    price: 199.99,
    notes:
      "Very rare player shirt believed to have been issued to Ziegler during the 2006-07 season. The Swiss international joined Samp on loan from Premier League outfit Tottenham in January this season and made 16 appearances as the Blucerchiati finished 9th in Serie A. The highlight of the season for the former Grasshoppers man was undoubtedly his goal in the 3-1 win over Messina in April. He opted to make the move permanent at the end of the campaign and spent another 4 seasons in Genoa before joining Turkish outfit Juventus in 2011.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/a/sampdoria-05-away-mw-ls-zeigler-back.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/a/sampdoria-05-away-mw-ls-zeigler-front.jpg",
    ],
  },
  {
    club: "Sampdoria",
    year: 2001,
    player: "Bonomi",
    league: "Serie A",
    size: "M",
    condition: 7,
    price: 199.99,
    notes:
      "Ultra rare player shirt believed to have been issued to or worn by Bonomi during the 2001-02 season. The midfielder joined the Blucerchiati from Lecce in 2000 but had struggled for game time in his first season at the Luigi Ferraris being loaned out to Pescara. He made 13 appearances in all competitions this season as the side continued to struggle for promotion from Serie B eventually finishing 11th overall. The former Torino and Empoli man was loaned out once more in January to Catania and would leave permanently at the end of the season to join Fiorentina who had been relegated to Serie C.",
    imageUrl: [
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/a/sampdoria-01-home-mw-bonomi-back.jpg",
      "https://dnre29p915wg3.cloudfront.net/media/catalog/product/cache/1/image/1500x/0dc2d03fe217f8c83829496872af24a0/s/a/sampdoria-01-home-mw-bonomi-front.jpg",
    ],
  },
];

module.exports = shirts;
