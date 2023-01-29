import CompanyTile from '@/components/CompanyTile';

function CompanyList() {
  return (
    <>
      <p className='pb-10 text-center text-2xl font-bold text-violet-600'>
        Companies I have worked for
      </p>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16'>
        <CompanyTile
          description='Senceive is a UK-based technology company that specializes in the design, development, and manufacture of wireless monitoring systems. Their systems are used in a variety of applications, such as civil engineering, construction, and environmental monitoring.'
          name='Senceive'
          location='Milton Keynes'
          image='https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/senceive-1.png?alt=media&token=aec7c648-318c-4757-8275-6266b7cfeff7'
          country='UK'
          link='https://www.senceive.com/'
          classes='from-green-100 dark:from-green-900/20'
          key={0}
        />

        <CompanyTile
          name='Spotlas'
          location='Lonodn'
          description='Spotlas is the social network revolutionising the way people discover, choose and experience spots around the world – from cafes, restaurants, bars and nightclubs to hotels, museums, shops and beaches...Any spot. Any time. Anywhere.'
          country='UK'
          link='https://spotlas.com/'
          image='https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/spotlas-img-1.png?alt=media&token=06585427-a04e-463a-93b8-3cccd78dc0e1'
          classes='from-pink-100 dark:from-pink-900/20'
        />

        <CompanyTile
          name='RSI Lab'
          location='Dhaka'
          description='RSI Lab Limited is an IT solution provider company in Bangladesh. They provide software development, web development, mobile app development, digital marketing, and IT consulting services. They have a team of experienced developers who are skilled in various programming languages and technologies. asdasdasd asdas dasd asdas das dasd asd asd.'
          country='Bangladesh'
          link='https://www.rsi-lab.com/'
          image='https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/RSI-Lab-1.png?alt=media&token=395b538e-83fc-4760-88e1-afd2a8bf9e8e'
          classes='from-blue-100 dark:from-blue-900/20'
        />

        <CompanyTile
          name='Plan B Insights'
          description='Planb Insights is a market research and consulting firm based in Bangladesh that provides services such as market research, data analysis, and consulting to clients in various industries. They specialize in primary and secondary research methodologies such as surveys, focus groups, and interviews, and use the data gathered to help clients make informed business decisions.'
          location='Dhaka'
          country='Bangladesh'
          link='https://www.facebook.com/PlanbInsights/'
          image='https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/plan%20b%20insights%201.png?alt=media&token=e7faf080-208c-44c7-8303-0578a742b816'
          classes='from-gray-100 dark:from-gray-900'
        />
      </div>
    </>
  );
}

export default CompanyList;
