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

class Testimonial extends React.Component {

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
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Apa kata Mereka?',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-01.jpg')}
                        alt="Testimonial 01"
                        width={48}
                        height={48} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Belajar disini asik, mudah dimengerti, dan menyenangkan. Materi yang diberikan sangat lengkap dan sesuai dengan kebutuhan saya untuk memahami robotika dari dasar hingga mahir.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name">
                      Golong Shodo
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link fw-600">
                      Mahasiswa
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-02.jpg')}
                        alt="Testimonial 02"
                        width={48}
                        height={48} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Platform ini sangat membantu saya dalam memahami konsep-konsep robotika yang kompleks. Dengan penjelasan yang jelas dan contoh praktis, saya merasa lebih percaya diri dalam mengerjakan proyek-proyek robotika saya.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name">
                      Pisi Vigi
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link fw-600">
                      Siswa SMK
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-03.jpg')}
                        alt="Testimonial 03"
                        width={48}
                        height={48} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Anak saya sangat menikmati belajar robotika melalui platform ini. Materi yang disajikan dengan cara yang interaktif dan menyenangkan membuatnya semakin tertarik untuk mengeksplorasi dunia robotika lebih dalam.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-name">
                      Rafisius
                    </span>
                    <span className="text-color-low"> / </span>
                    <span className="testimonial-item-link fw-600">
                      Orang Tua
                    </span>
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;