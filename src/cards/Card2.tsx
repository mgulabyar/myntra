import { useState } from "react";

const campaigns = [
  {
    title:
      "July 11th 2025: 28 Cases of Dental Treatment, 150 Meals of Rice, 93000 Liters of Water",
    date: "01 Aug 25 1:38AM",
    category: "North Gaza: Food, Water & Other Distributions",
    description: "1) Water Distribution (93 000 L total) – Price Total al-Yarmouk area (al-Daraj, Gaza City) – 3 000 L @ 166 NIS → 498 NIS +",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/ZuBfLcv9QvWgRLta7e87_IMG-20250716-WA0045.jpg?profile=campaign.header_desktop",
  },
  {
    title: "UNESCO Listing: Joy and Betrayal on the Same Day",
    date: "18 Jul 25 2:33PM",
    category: "Raelene v The Government: Protect ancient rock art",
    description: `Murujuga is now World Heritage listed. That’s what we’ve fought for, for years. And it means something—it means the world sees what we already knew: that this place holds deep, sacred, cultural power. But today also hurts.`,
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/zLUymSyT1WPeRqt0irMA_f8f87d40-cb2b-4dca-9ba2-4a72d8321fb1-jyz0m4imrygb1kadtk12_419830343_120204769984100285_7976397692882953343_n.jpg?profile=campaign.header_desktop",
  },
  {
    title: "URGENT! We must act by May 15.",
    date: "15 May 25 9:42AM",
    category: "Help stop Big Oil's shocking new attack on the climate movement!",
    description: `That’s the date of a post-trial motion in a $300 million SLAPP case filed by Trump ally and pipeline billionaire Kelcy Warren—the man behind the Dakota Access Pipeline. And if we don’t act now, Greenpeace will definitely lose.`,
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/QRahN6p0IzVu7KuodEyxCRYuDcf1g7BXnbWCEXo9.jpg?profile=campaign.header_desktop",
  },
  {
    title: "Trial begins 1st December 2025",
    date: "10 Jul 25 6:16AM",
    category: "Justice for Jayson: Stand up for Free Speech & Artistic Freedom",
    description: `After the Melbourne Symphony Orchestra failed to block my case, the proceeding is now listed for trial commencing 1st December.`,
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/0YCtILOC2Q9NKpMmm8uBqQerXxKKehQZMJRoZaEr.jpg?profile=campaign.header_desktop",
  },
  {
    title: "Thank You and News: a Strikeout Hearing",
    date: "20 Jul 25 11:18AM",
    category: "Defend Free Speech Defend Mary K",
    description: `Since my last update there have been numerous developments. Justice Darryl Ranghia found Antoinette Lattouf was removed from her on air role because the ABC panicked due to a campaign of complaints ‘by the Israel Lobby’ (one of the things I am accused of is being a ‘conspiracy theorist’ because I believe there is such a thing as the ‘Israel Lobby’, and that it has influence) 
    Secondly, Justice Angus Stewart stated`,
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/t8TctjJFR4m55BQTSlt5_img_1350.jpeg?profile=campaign.header_desktop",
  },

  {
    title: "Quarter million dollars spent in 10 days providing thousands of meals!",
    date: "06 Aug 25 1:57PM",
    category: "South Gaza: Tents, Food &amp; Water",
    description: "The imposed famine remains ongoing and the situation remains difficult. Our ground team is tired but insist to keep going. To support them we provide them with extra nutrition during working hours and provide additional workers who we pay a one-off fee to.",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/wegCR75JSp22Saf1LQ4K_PHOTO-2025-08-05-12-20-00%202.jpg?profile=campaign.header_desktop",
  },

{
    title: "Launch of North Medical Tent, South Medical Days &amp",
    date: "14 Jul 25 8:24AM",
    category: "Medical Campaign x Sameer Project",
    description: "We recently launched our Medical Campaign in order to have a specific amount to spend on targeted healthcare initiatives. During the first couple of weeks as we raised money we conducted certain medical projects under their previous North and South campaigns until we garner enough support to pay for all medical expenses out of this campaign.",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/gphPzoYmSSK4Inq06sd4_PHOTO-2025-07-10-10-33-47.jpg?profile=campaign.header_desktop",
  },

  {
    title: "New family welcomed &amp; daily provided!",
    date: "03 Aug 25 9:02AM",
    category: "The Refaat Alareer Camp - by The Sameer Project",
    description: "The famine is affecting everyone in Gaza including the families in the Refaat Alareer camp but we are doing our best to provide daily meals as well as extra nutrition to the 4 special cases of malnutrition that we have in the camp. We've also had 2 families evacuate last week: little Sanad left with his mother and brother to get treatment in Spain leaving their dad behind and little Amro who left with his father to France leaving his mother and siblings behind.",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/bP8Qwtm0SYKV86jLcIan_PHOTO-2025-07-30-12-58-23.jpg?profile=campaign.header_desktop",
  },

  {
    title: "URGENT UPDATE ON THE FORCED STARVATION IN GAZA",
    date: "22 Jul 25 2:31AM",
    category: "Supporting Families from Gaza to Rebuild Their Lives",
    description:"You may have been hearing about how there is no food in the markets in Gaza right now, which is true: many merchants are not attending markets anymore due to the increasing lawlessness and the fear of being attacked and killed - which is unsurprising how desperate people are for food, and how many people are risking their lives to feed their families.",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/lxx7d93BTT2z9XnIln3P_new-goal-evacuating-and-rebuilding-the-lives-of-18-families-from-gaza-2.png?profile=campaign.header_desktop",
  },

  
  {
    title: "Follow us on Instagram",
    date: "09 Aug 25 8:49AM",
    category: "Lifeline for Hind, Shield for Her Family",
    description:"My heart is with you ❤️ and our hope is big with your support 🌟.. Please visit my Instagram profile to hear my story from the heart 💬, and share it with those around you 🤲. Every share means a new chance at life for us 🌈. Thank you for being part of our journey 🙏",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/lPfLm9Og6DVfFnNmnA1nAfU7mffudZoajnNENgd9.jpg?profile=campaign.header_desktop",
  },
  
  {
    title: "Quarter million dollars spent in 10 days providing thousands of meals!",
    date: "06 Aug 25 1:57PM",
    category: "South Gaza: Tents, Food &amp; Water",
    description:"The imposed famine remains ongoing and the situation remains difficult. Our ground team is tired but insist to keep going. To support them we provide them with extra nutrition during working hours and provide additional workers who we pay a one-off fee to.",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/GHbijLiYSarCY9Fp55fd_PHOTO-2025-07-27-20-12-34.jpg?profile=campaign.header_desktop",
  },
  {
    title: "Participe à la construction de Thousand Madleens to Gaza France",
    date: "01 Aug 25 1:48AM",
    category: "Save Farah's life from malnutrition and Seraj and his family frm death",
    description:"La flottille partira en mer (plus pratique pour naviguer) dans quelques semaines et d'ici là, elle a besoin de relais ici : à terre.",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/WsXVB6S1T0ikxJoW4wdg_signal-2025-07-31-121212_002.jpeg?profile=campaign.header_desktop",
  },
  
  {
    title: "Help feed Gaza families during famine",
    date: "11 Aug 25 12:00PM",
    category: "Emergency Relief - Gaza",
    description: "We're providing daily meals to starving families. Every donation counts toward saving lives.",
    image: "https://d1c7drk47yg0al.cloudfront.net/wegCR75JSp22Saf1LQ4K_PHOTO-2025-08-05-12-20-00%202.jpg?profile=campaign.header_desktop"
  },
  {
    title: "Medical Tent Support in North Gaza",
    date: "10 Aug 25 9:30AM",
    category: "Medical Campaign x Sameer Project",
    description: "Support our medical tent offering first aid and trauma care in northern Gaza.",
    image: "https://d1c7drk47yg0al.cloudfront.net/gphPzoYmSSK4Inq06sd4_PHOTO-2025-07-10-10-33-47.jpg?profile=campaign.header_desktop"
  },
  {
    title: "Families Evacuated from Conflict Zones",
    date: "09 Aug 25 3:15PM",
    category: "Refaat Alareer Camp",
    description: "We’ve evacuated vulnerable children to Spain and France for urgent medical treatment.",
    image: "https://d1c7drk47yg0al.cloudfront.net/bP8Qwtm0SYKV86jLcIan_PHOTO-2025-07-30-12-58-23.jpg?profile=campaign.header_desktop"
  },
  {
    title: "93,000 Liters of Water Delivered",
    date: "08 Aug 25 11:45AM",
    category: "North Gaza Water Distribution",
    description: "We delivered 93,000L of clean water to displaced families in al-Yarmouk and al-Daraj.",
    image: "https://d1c7drk47yg0al.cloudfront.net/ZuBfLcv9QvWgRLta7e87_IMG-20250716-WA0045.jpg?profile=campaign.header_desktop"
  },
  {
    title: "SLAPP Lawsuit Threatens Greenpeace",
    date: "07 Aug 25 2:00PM",
    category: "Climate Activism",
    description: "Greenpeace is under attack in a $300 million lawsuit. Stand with us and fight back!",
    image: "https://d1c7drk47yg0al.cloudfront.net/assets/QRahN6p0IzVu7KuodEyxCRYuDcf1g7BXnbWCEXo9.jpg?profile=campaign.header_desktop"
  },
  {
    title: "Free Speech on Trial: Jayson vs MSO",
    date: "06 Aug 25 5:10PM",
    category: "Artistic Freedom",
    description: "Support Jayson as he challenges the MSO in a legal battle over freedom of expression.",
    image: "https://d1c7drk47yg0al.cloudfront.net/assets/0YCtILOC2Q9NKpMmm8uBqQerXxKKehQZMJRoZaEr.jpg?profile=campaign.header_desktop"
  },
  {
    title: "Murujuga: Listed & Betrayed",
    date: "05 Aug 25 10:00AM",
    category: "Cultural Heritage",
    description: "UNESCO listing is here, but so is the pain of knowing the site is still under threat.",
    image: "https://d1c7drk47yg0al.cloudfront.net/images/zLUymSyT1WPeRqt0irMA_f8f87d40-cb2b-4dca-9ba2-4a72d8321fb1-jyz0m4imrygb1kadtk12_419830343_120204769984100285_7976397692882953343_n.jpg?profile=campaign.header_desktop"
  },
  {
    title: "Hind’s Lifeline on Instagram",
    date: "04 Aug 25 1:30PM",
    category: "Save Hind & Her Family",
    description: "Visit our Instagram to hear Hind’s story and support her family’s survival.",
    image: "https://d1c7drk47yg0al.cloudfront.net/assets/lPfLm9Og6DVfFnNmnA1nAfU7mffudZoajnNENgd9.jpg?profile=campaign.header_desktop"
  },
  {
    title: "Rebuilding Lives After Forced Starvation",
    date: "03 Aug 25 8:00AM",
    category: "Support Families After War",
    description: "Food has vanished. We help families rebuild with dignity and safety.",
    image: "https://d1c7drk47yg0al.cloudfront.net/images/lxx7d93BTT2z9XnIln3P_new-goal-evacuating-and-rebuilding-the-lives-of-18-families-from-gaza-2.png?profile=campaign.header_desktop"
  },
  {
    title: "Thousand Madleens to Gaza - France",
    date: "02 Aug 25 7:10AM",
    category: "International Solidarity",
    description: "Join the flotilla from France bringing aid and hope to Gaza families.",
    image: "https://d1c7drk47yg0al.cloudfront.net/WsXVB6S1T0ikxJoW4wdg_signal-2025-07-31-121212_002.jpeg?profile=campaign.header_desktop"
  },
  {
    title: "Justice for Journalist Mary K",
    date: "01 Aug 25 4:45PM",
    category: "Free Speech & Media Freedom",
    description: "Help defend Mary K against political suppression in Australia.",
    image: "https://d1c7drk47yg0al.cloudfront.net/images/t8TctjJFR4m55BQTSlt5_img_1350.jpeg?profile=campaign.header_desktop"
  },
  
  {
    title: "Quarter Million Spent on Relief in 10 Days",
    date: "31 Jul 25 6:30PM",
    category: "South Gaza Emergency Food Aid",
    description: "In just 10 days, thousands of meals have been provided to those in need. Help us continue.",
    image: "https://d1c7drk47yg0al.cloudfront.net/assets/Dz4QBKHLgspYFFYPPWiecRuTrxdOIzgVR6emIbPX.jpg?profile=campaign.header_desktop"
  }

];
const Card2 = () => {
  const cardsPerPage = 8; 
  const [visibleCount, setVisibleCount] = useState(cardsPerPage);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + cardsPerPage, campaigns.length));
  };

  const isAllVisible = visibleCount >= campaigns.length;

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl md:ml-5 md:text-4xl text-gray-800 font-bold mb-6">
        Trending Campaigns
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1300px] mx-auto">
        {campaigns.slice(0, visibleCount).map((card, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-72 h-[420px] cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-103"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-bold text-gray-700 leading-tight mb-1">
                  {card.title}
                </h2>
                <p className="text-xs text-gray-500 mb-1">{card.date}</p>
                <p className="text-xs text-gray-600 mb-2">{card.category}</p>
              </div>
              <hr className="w-full my-2 border-gray-300" />
              <p className="text-sm text-gray-700 line-clamp-4">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!isAllVisible && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="  hover:outline-2 hover:outline-offset-2 hover:outline-blue-800 px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Card2; 
  