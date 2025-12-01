import React from 'react';
import HeroSplit from '../components/sections/HeroSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesTabs from '../components/sections/FeaturesTabs';
import News from '../components/sections/News';
import Roadmap from '../components/sections/Roadmap';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';

class Home extends React.Component {
  // 1. Buat constructor untuk menampung ref
  constructor(props) {
    super(props);
    // Buat ref untuk menunjuk ke bagian pricing
    this.pricingRef = React.createRef();
    this.featuresRef = React.createRef(); 
  }

  // 2. Buat fungsi untuk melakukan scroll
  scrollToPricing = () => {
    // Akses elemen DOM melalui .current dan panggil scrollIntoView
    this.pricingRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToFeatures = () => {
    this.featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <React.Fragment>
        {/* 3. Kirim fungsi scrollToPricing sebagai props ke komponen HeroSplit */}
        <HeroSplit
        onPricingClick={this.scrollToPricing} hasBgColor invertColor 
        onFeaturesClick={this.scrollToFeatures}
        />

        <div ref={this.featuresRef}>
          <FeaturesTiles />
        </div>
        <FeaturesTabs topDivider bottomOuterDivider />
        <News className="illustration-section-01" />
        <Roadmap topOuterDivider />

        {/* 4. Lampirkan ref ke div yang membungkus komponen Pricing */}
        <div ref={this.pricingRef}>
          <Pricing hasBgColor pricingSlider />
        </div>

        <Cta hasBgColor invertColor split />
      </React.Fragment>
    );
  }
}

export default Home;