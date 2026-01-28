import { LANG } from "../utils/langConstant";
// since the language to be changed in this Aboutus pagement .. so getting that state var in teh required componenet .. as shown 
const About = ({ lang }) => {
  console.log(lang);
  // import language obj .. so that we can have this locally accessible.. 
  const data = LANG[lang];
  return (
    <div>
      <div>
    // using dynamic data .. a shown by grabbing using desc from the config driven object
        <h1 className="font-bold text-2xl my-5">{data.title}</h1>
  // using dynamic data .. a shown by grabbing using desc from the config driven object
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className="font-bold text-2xl my-5">{data.title2}</h1>
  // using dynamic data .. a shown by grabbing using desc from the config driven object
        <p>{data.desc}</p> 
      </div>
      <div>
  // using dynamic data .. a shown by grabbing using desc from the config driven object
        <h1 className="font-bold text-2xl my-5">{data.title3}</h1>
  // using dynamic data .. a shown by grabbing using desc from the config driven object
        <p>{data.desc}</p>
      </div>
      <div>
  // using dynamic data .. a shown by grabbing using desc from the config driven object
        <h1 className="font-bold text-2xl my-5">{data.title4}</h1>
  // using dynamic data .. a shown by grabbing using desc from the config driven object
        <p>{data.desc}</p>
      </div>
    </div>
  );
};
export default About;
