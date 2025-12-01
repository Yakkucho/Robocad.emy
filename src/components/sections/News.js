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

class News extends React.Component {

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
      'news section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'news-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Sorotan Robocad',
      paragraph: 'Ikuti perkembangan terbaru, pencapaian luar biasa, dan peluang emas yang ada di ekosistem akademi kami.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
            <div className={tilesClasses}>

              {/* Berita 1: Pencapaian Alumni */}
              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/news-image-01.jpg')}
                      alt="News 01"
                      width={344}
                      height={194} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="#0">Alumni Robocad Pimpin Tim Robotika di Perusahaan Teknologi Terkemuka</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Kami bangga mengumumkan bahwa Sinta Wijaya, lulusan angkatan 2024, kini menjabat sebagai Kepala Tim Automasi di PT. Inovasi Digital. Kisahnya adalah bukti nyata dari kualitas kurikulum kami yang berstandar industri.
                      </p>
                    </div>
                    <div className="news-item-more text-xs mb-8">
                      <a href="#0">Baca lebih lanjut</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Berita 2: Fasilitas Baru */}
              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/news-image-02.jpg')}
                      alt="News 02"
                      width={344}
                      height={194} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="#0">Robocad Resmikan Laboratorium AI & Visi Komputer Baru</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Untuk mendukung riset dan proyek yang lebih canggih, kami telah membuka fasilitas lab baru yang dilengkapi dengan GPU-powered workstations dan perangkat sensor terkini untuk eksplorasi di bidang AI dan Visi Komputer.
                      </p>
                    </div>
                    <div className="news-item-more text-xs mb-8">
                      <a href="#0">Baca lebih lanjut</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Berita 3: Beasiswa */}
              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/news-image-03.jpg')}
                      alt="News 03"
                      width={344}
                      height={194} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="#0">Program Beasiswa 'Inovator Masa Depan' 2025 Kini Dibuka!</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Sebagai komitmen kami untuk mencetak talenta terbaik, Robocad kembali membuka program beasiswa penuh bagi calon siswa berprestasi. Pelajari syarat dan ketentuan, dan daftarkan diri Anda sebelum batas waktu.
                      </p>
                    </div>
                    <div className="news-item-more text-xs mb-8">
                      <a href="#0">Baca lebih lanjut</a>
                    </div>
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

News.propTypes = propTypes;
News.defaultProps = defaultProps;

export default News;