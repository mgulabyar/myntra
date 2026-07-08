
import { useState } from "react";

const campaigns = [
  {
    title: "Justice for Mahmoud Khalil — Support Needed",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/mwaHgP9LTm2lko1tB7W6_mahmoud-chuffed-photo.jpg?profile=campaign.header_desktop",
    location: "United States",
    amount: "$576,095",
    progress: 58,
  },
  {
    title: "Justice for Rümeysa Öztürk",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/3IMAWVzlPA9VHKqZnQlIyJrGRhGO8vwiqS84u726.jpg?profile=campaign.header_desktop",
    location: "United States",
    amount: "$173,671",
    progress: 69.46,
  },
  {
    title: "Raelene v The Government: Protect ancient rock art",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/zLUymSyT1WPeRqt0irMA_f8f87d40-cb2b-4dca-9ba2-4a72d8321fb1-jyz0m4imrygb1kadtk12_419830343_120204769984100285_7976397692882953343_n.jpg?profile=campaign.header_desktop",
    location: "Australia",
    amount: "$233,750",
    progress: 77.91,
  },
  {
    title:
      "Help stop Big Oil's shocking new attack on the climate movement!",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/QRahN6p0IzVu7KuodEyxCRYuDcf1g7BXnbWCEXo9.jpg?profile=campaign.header_desktop",
    location: "United States",
    amount: "$90,683",
    progress: 90.68,
  },
  {
    title: "Justice for Jayson: Stand up for Free Speech &amp; Artistic Freedom",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/0YCtILOC2Q9NKpMmm8uBqQerXxKKehQZMJRoZaEr.jpg?profile=campaign.header_desktop",
    location: "Australia",
    amount: "$108,359",
    progress: 43.34,
  },

  {
    title: "Help us raise funds for Sulala Animal Rescue",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/yA0Rsy5owcDZH93OyJ5kCSKIMa6ds8y9em630KLT.jpg?profile=campaign.header_desktop",
    location: "United Kingdom",
    amount: "£56,325",
    progress: 56.89,
  },


  {
    title: "PROTECT SACRED WATER",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/2vupVYL2SqSIP4gGZVQ7_img_4769.jpg?profile=campaign.header_desktop",
    location: "Australia",
    amount: "$335,8020",
    progress: 96.91,
  },
  {
    title:
      "Help stop Big Oil's shocking new attack on the climate movement!",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/5VS1TGRnyurnDM7pZduA_screenshot-2025-08-05-at-114457.png?profile=campaign.header_desktop",
    location: "United Kingdom",
    amount: "£12,784",
    progress: 51.01,
  },
  {
    title: "Fund Australia's FIRST Punter-Powered Lobbyist",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/IN41ICssn8yRQ7D4N9S72V1EoiBdCBoWus009t4a.jpg?profile=campaign.header_desktop",
    location: "Australia",
    amount: "$19,937",
    progress: 23.43,
  },

  {
    title: "Students Against EACOP Uganda - 2025",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/ct66ivdQoKUIXUBeALyK_a79362be-72f4-422f-8a09-32b0c0efa040.jpg?profile=campaign.header_desktop",
    location: "United Kingdom",
    amount: "£19,889",
    progress: 88.09,
  },
  {
    title: "Help Save Our Sanctuary: Sydney Fox and Dingo Rescue",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/LgWEHctWTfCTrqYxI4Kr_sfdr-10-year-anniversary-745-x-420-px-1.png?profile=campaign.header_desktop",
    location: "Australia",
    amount: "$88,954",
    progress: 96.91,
  },

  {
    title:
      "Help Ashley and her partner relocate after death threats",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/v79X3cTTrML9H4jatljqvMSYzzaUIgnrv3lLQMgf.jpg?profile=campaign.header_desktop",
    location: "United State",
    amount: "$1,604",
    progress: 37.01,
  },

  {
    title: "Help a transgwOrl out",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/Z8CdOuDqS6u6MEkm203H_help-a-transgw0rl.png?profile=campaign.header_desktop",
    location: "United State",
    amount: "$490",
    progress: 40.34,
  },

  {
    title: "Justice for Badar Khan Suri __ Your Assistance is Needed!",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/qLJpISJXfGOdahMfR18Ymbb7Fi5Uk4KB77nXQ1xa.jpg?profile=campaign.header_desktop",
    location: "United State",
    amount: "$42,651",
    progress: 48.89,
  },

  {
    title: "Defend Free Speech Defend Mary K",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/t8TctjJFR4m55BQTSlt5_img_1350.jpeg?profile=campaign.header_desktop",
    location: "Australia",
    amount: "$123,058",
    progress: 90.91,
  },
  {
    title:
      "South Gaza: Tents, Food & Water",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/6s7IZ0b662HqvxzpGo3QrbsxtIrGgF6BNz2XpEi1.jpg?profile=campaign.header_desktop",
    location: "United Kingdom",
    amount: "£2054,365",
    progress: 51.01,
  },
  {
    title: "Medical Campaign x Sameer Project",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/pnBthYxiSue0qyisT1wc_photo-2025-06-26-12-03-29.jpg?profile=campaign.header_desktop",
    location: "United Kingdom",
    amount: "$538,359",
    progress: 50.34,
  },


  {
    title: "Two Brothers, One Mission: A Lifeline for Our Family in Gaza",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/BXrVQQpNRuC8SkmmDKEI_1.jpeg?profile=campaign.header_desktop",
    location: "United Kingdom",
    amount: "$77,556",
    progress: 80.89,
  },

  {
    title: "Global Sumud Flotilla - Global",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/qIZ5PPWxQfGY7UZQPV1B_32f75efa-030d-4e55-9eb0-cfed8f2bc29f.jpg?profile=campaign.header_desktop",
    location: "Spain",
    amount: "$329,275",
    progress: 75.91,
  },

  {
    title:
      "The Refaat Alareer Camp - by The Sameer Project",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/UHpRifUfrMUYOAZ4iWl03Cj327U9uUvlcRcN3uPQ.jpg?profile=campaign.header_desktop",
    location: "United Kingdom",
    amount: "£759,234",
    progress: 85.01,
  },

  {
    title: "Supporting Families from Gaza to Rebuild Their Lives",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/lxx7d93BTT2z9XnIln3P_new-goal-evacuating-and-rebuilding-the-lives-of-18-families-from-gaza-2.png?profile=campaign.header_desktop",
    location: "Unuted kingdom",
    amount: "$538,524",
    progress: 100,
  },

  {
    title: "Lifeline for Hind, Shield for Her Family",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/lPfLm9Og6DVfFnNmnA1nAfU7mffudZoajnNENgd9.jpg?profile=campaign.header_desktop",
    location: "United Kingdom",
    amount: "$56,325",
    progress: 25.89,
  },

  {
    title: " “Relief the displaced in Gaza with MALAK” ",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/images/2cYaRhOURduHrgL8dQvy_1000106544.jpg?profile=campaign.header_desktop",
    location: "Gaza Lowa, United State",
    amount: "$38,774",
    progress: 38.91,
  },
  {
    title:
      "Help Hashem Build His Family in Gaza",
    image:
      "https://d1c7drk47yg0al.cloudfront.net/assets/Xf73DDnL7asCYniJPL4QgogOS6eZ8mVs7Ipjtndh.jpg?profile=campaign.header_desktop",
    location: "United State",
    amount: "$13,189",
    progress: 20.01,
  },
];
const PAGE_SIZE = 8;

const CampaignCards = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loadingMore, setLoadingMore] = useState(false);

  const showMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + PAGE_SIZE);
      setLoadingMore(false);
    }, 300);
  };
//  setvi
  const allShown = visibleCount >= campaigns.length;
  return (
    <div className="flex flex-col items-center px-4 py-8 bg-gray-50">
  <div className="flex flex-wrap justify-center gap-6">
    {campaigns.slice(0, visibleCount).map((card, index) => (
      <div
        key={index}
        className="w-[300px] bg-white cursor-pointer shadow-lg rounded-xl overflow-hidden flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
        style={{
          minHeight: "390px",
          animation: "cardFadeIn 500ms ease-out both",
          animationDelay: `${(index % PAGE_SIZE) * 60}ms`,
        }}
      >
        <div className="w-full h-[210px] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out hover:scale-110"
            style={{ backgroundImage: `url("${card.image}")` }}
          />
        </div>

        <div className="flex flex-col justify-between flex-1 p-5 space-y-3">
          <div className="space-y-2">
            <h3 className="font-bold text-[20px] text-gray-800 leading-snug line-clamp-2 min-h-[56px]">
              {card.title}
            </h3>

            <div className="flex items-center gap-1 text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
              >
                <path
                  d="M12 21s-8-6.58-8-12A8 8 0 1 1 20 9c0 5.42-8 12-8 12z"
                  fill="currentColor"
                />
                <circle cx="12" cy="9" fill="white" r="4" />
              </svg>
              <span className="truncate">{card.location}</span>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            <div className="w-full bg-gray-200 rounded-full h-[10px] overflow-hidden">
              <div
                className="bg-[#00ADEE] h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${Math.min(card.progress, 100)}%` }}
              />
            </div>
            <h5 className="font-bold text-sm text-gray-900">
              {card.amount}{" "}
              <span className="font-normal text-gray-600">raised</span>
            </h5>
          </div>
        </div>
      </div>
    ))}
  </div>

  {!allShown && (
    <button
      onClick={showMore}
      disabled={loadingMore}
      className="mt-8 px-6 py-2 cursor-pointer bg-blue-700 border border-transparent rounded-lg text-white font-semibold transition-all duration-300 ease-out hover:bg-blue-600 hover:scale-[1.03] hover:shadow-md hover:shadow-blue-200 active:scale-95 hover:outline hover:outline-offset-2 hover:outline-blue-800 disabled:opacity-70 disabled:cursor-wait disabled:hover:scale-100"
    >
      {loadingMore ? "Loading..." : "See More Campaigns"}
    </button>
  )}

  <style>{`
    @keyframes cardFadeIn {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
</div>

  );
};

export default CampaignCards;
