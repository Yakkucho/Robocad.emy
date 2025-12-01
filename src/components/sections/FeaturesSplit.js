import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Tentang Robocad',
      paragraph: 'Robocad adalah akademi robotika modern yang lahir dari sebuah keyakinan bahwa masa depan Indonesia bergantung pada talenta digital yang siap berinovasi.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    Menjawab Kebutuhan Industri 4.0
                  </h3>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                    Robocad didirikan karena adanya kesenjangan besar antara lulusan pendidikan formal dengan kebutuhan nyata di industri automasi dan robotika. Kami hadir untuk menghasilkan talenta yang tidak hanya berwawasan, tetapi juga memiliki keahlian praktis yang dicari perusahaan.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/features-split-image-01.jpg')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    Menjembatani Teori dan Praktik
                  </h3>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                    Banyak talenta memahami konsep, namun kesulitan dalam eksekusi. Robocad didirikan atas dasar keyakinan bahwa pembelajaran terbaik adalah melalui tindakan nyata. Setiap kurikulum kami berpusat pada proyek dan simulasi dunia nyata untuk memastikan lulusan kami siap kerja.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/features-split-image-02.jpg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    Menciptakan Talenta Berdaya Saing Global
                  </h3>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                    Kami didirikan dengan visi untuk memberdayakan talenta lokal agar mampu bersaing di panggung dunia. Dengan menyediakan akses ke pendidikan berstandar internasional, kami bertujuan untuk mencetak inovator dari Indonesia yang karyanya diakui secara global.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/features-split-image-03.jpg')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;