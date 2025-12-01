import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Pricing extends React.Component {

  render() {

    // --- LOGIC TOMBOL WHATSAPP ---
    const waNumber = '6282110141922'; 
    const waLinkBasic = `https://wa.me/${waNumber}?text=Halo%20Robocad,%20saya%20tertarik%20dengan%20program%20Basic.`;
    const waLinkProfesional = `https://wa.me/${waNumber}?text=Halo%20Robocad,%20saya%20tertarik%20dengan%20program%20Profesional.`;
    const waLinkUltimate = `https://wa.me/${waNumber}?text=Halo%20Robocad,%20saya%20tertarik%20dengan%20program%20Ultimate.`;
    // ----------------------------

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
      'pricing section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'pricing-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Investasi untuk diri Anda',
      paragraph: 'Pilih program yang paling sesuai dengan tujuan Anda. Setiap program dirancang untuk memberikan keahlian praktis yang relevan dengan industri.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content invert-color" />
            <div className={tilesClasses}>

              {/* TIER 1: STARTER */}
              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner has-shadow">
                  {/* STRUKTUR DISAMAKAN: Header, Content, CTA */}
                  <div className="pricing-item-header pb-24 mb-24">
                    <div className="pricing-item-price mb-4">
                      <span className="pricing-item-price-currency h3">Rp</span>
                      <span className="pricing-item-price-amount h2">1.5 Jt</span>
                    </div>
                    <div className="text-color-high h4 m-0">Basic</div>
                    <div className="text-xs text-color-low">
                      Ideal untuk pemula yang ingin eksplorasi.
                    </div>
                  </div>
                  <div className="pricing-item-content">
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                        Yang Termasuk:
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Akses modul pengantar</li>
                        <li className="is-checked">Akses forum komunitas</li>
                        <li className="is-checked">Sertifikat penyelesaian modul</li>
                        <li>Bimbingan mentor</li>
                        <li>Dukungan karir</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    {/* INI YANG DIUBAH: Tambah target dan rel */}
                    <Button tag="a" color="primary" wide href={waLinkBasic} target="_blank" rel="noopener noreferrer">Mulai Belajar</Button>
                  </div>
                </div>
              </div>

              {/* TIER 2: PROFESIONAL (PALING POPULER) */}
              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  {/* STRUKTUR INI SUDAH BENAR */}
                  <div className="pricing-item-header pb-24 mb-24">
                    <div className="pricing-item-tag">Populer</div>
                    <div className="pricing-item-price mb-4">
                      <span className="pricing-item-price-currency h3">Rp</span>
                      <span className="pricing-item-price-amount h2">5 Jt</span>
                    </div>
                    <div className="text-color-high h4 m-0">Profesional</div>
                    <div className="text-xs text-color-low">
                      Kurikulum lengkap untuk menjadi siap karir.
                    </div>
                  </div>
                  <div className="pricing-item-content">
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                        Yang Termasuk:
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Semua fitur paket Starter</li>
                        <li className="is-checked">Akses penuh ke semua modul</li>
                        <li className="is-checked">Bimbingan mentor & review proyek</li>
                        <li className="is-checked">Akses workshop eksklusif</li>
                        <li>Dukungan karir prioritas</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    {/* INI YANG DIUBAH: Tambah target dan rel */}
                    <Button tag="a" color="primary" wide href={waLinkProfesional} target="_blank" rel="noopener noreferrer">Pilih Program Ini</Button>
                  </div>
                </div>
              </div>

              {/* TIER 3: ULTIMATE */}
              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  {/* STRUKTUR DISAMAKAN: Header, Content, CTA */}
                  <div className="pricing-item-header pb-24 mb-24">
                    <div className="pricing-item-price mb-4">
                      <span className="pricing-item-price-currency h3">Rp</span>
                      <span className="pricing-item-price-amount h2">8.5 Jt</span>
                    </div>
                    <div className="text-color-high h4 m-0">Ultimate</div>
                    <div className="text-xs text-color-low">
                      Hasil maksimal dengan dukungan karir penuh.
                    </div>
                  </div>
                  <div className="pricing-item-content">
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                        Yang Termasuk:
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Semua fitur paket Profesional</li>
                        <li className="is-checked">Dukungan karir prioritas</li>
                        <li className="is-checked">Bantuan penempatan magang</li>
                        <li className="is-checked">Coaching karir personal</li>
                        <li className="is-checked">Review portofolio oleh ahli industri</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    {/* INI YANG DIUBAH: Tambah target dan rel */}
                    <Button tag="a" color="secondary" wide href={waLinkUltimate} target="_blank" rel="noopener noreferrer">Daftar Sekarang</Button>
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

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;