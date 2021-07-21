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
];

module.exports = shirts;
