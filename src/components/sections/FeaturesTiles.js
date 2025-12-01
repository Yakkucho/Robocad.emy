import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class FeaturesTiles extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tiles section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tiles-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Kenapa Robocad?',
      paragraph: 'Dapatkan akses ke kursus, praktik langsung, dan sertifikasi yang diakui industri untuk mempersiapkan Anda menghadapi masa depan digital.'
    };

    return (
      <section
        id="fitur-akademi"
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-01.svg')}
                        alt="Features tile icon 01"
                        width={64}
                        height={64} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Kurikulum Standar Industri
                    </h4>
                    <p className="m-0 text-sm">
                      Materi dirancang oleh para ahli dan disesuaikan dengan kebutuhan industri terkini, memastikan Anda mempelajari keahlian yang paling relevan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="100">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-02.svg')}
                        alt="Features tile icon 02"
                        width={64}
                        height={64} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Praktik di Laboratorium Virtual
                    </h4>
                    <p className="m-0 text-sm">
                      Asah kemampuan teknis dengan simulasi jaringan dan lab interaktif. Dapatkan pengalaman praktis tanpa memerlukan perangkat fisik.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-03.svg')}
                        alt="Features tile icon 03"
                        width={64}
                        height={64} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Sertifikasi yang Diakui Global
                    </h4>
                    <p className="m-0 text-sm">
                      Raih sertifikasi resmi yang akan meningkatkan nilai profesional Anda dan diakui oleh perusahaan teknologi di seluruh dunia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-04.svg')}
                        alt="Features tile icon 04"
                        width={64}
                        height={64} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Jalur Karir & Peluang Kerja
                    </h4>
                    <p className="m-0 text-sm">
                      Kami membantu menghubungkan Anda dengan mitra perusahaan dan memberikan panduan untuk membangun karir impian di bidang teknologi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-05.svg')}
                        alt="Features tile icon 05"
                        width={64}
                        height={64} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Belajar dari Instruktur Ahli
                    </h4>
                    <p className="m-0 text-sm">
                      Dapatkan bimbingan langsung dari para praktisi berpengalaman yang siap membantu Anda memahami konsep-konsep kompleks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="500">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-06.svg')}
                        alt="Features tile icon 06"
                        width={64}
                        height={64} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Akses Belajar Fleksibel
                    </h4>
                    <p className="m-0 text-sm">
                      Belajar kapan saja dan di mana saja. Platform kami dirancang untuk mendukung gaya belajar Anda yang dinamis dan mandiri.
                    </p>
                  </div>
                </div>
              </div>              

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;