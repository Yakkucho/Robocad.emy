import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/LogoInvert';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

class Footer extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      topDivider,
      ...props
    } = this.props;

    const classes = classNames(
      'site-footer invert-color',
      topOuterDivider && 'has-top-divider',
      className
    );

    return (
      <footer
        {...props}
        className={classes}
      >
        <div className="container">
          <div className={
            classNames(
              'site-footer-inner',
              topDivider && 'has-top-divider'
            )}>
            <div className="footer-top text-xxs">
              <div className="footer-blocks">

                {/* Blok 1: Logo & Copyright */}
                <div className="footer-block">
                  <Logo className="mb-16" />
                  <div className="footer-copyright">&copy; 2025 Robocad, All Rights (not) Reserved</div>
                </div>

                {/* Blok 2: Navigasi */}
                <div className="footer-block">
                  <div className="footer-block-title">Jelajahi</div>
                  <ul className="list-reset mb-0">
                    <li>
                      <a href="#0">Tentang Kami</a>
                    </li>
                    <li>
                      <a href="#0">Program & Kurikulum</a>
                    </li>
                    <li>
                      <a href="#0">Galeri</a>
                    </li>
                    <li>
                      <a href="#0">FAQ</a>
                    </li>
                  </ul>
                </div>

                {/* Blok 3: Kontak */}
                <div className="footer-block">
                  <div className="footer-block-title">Hubungi Kami</div>
                  <ul className="list-reset mb-0">
                    <li>
                      <a href="#0">Jl. Veteran No. 10, Malang</a>
                    </li>
                    <li>
                      <a href="#0">info@robocad.id</a>
                    </li>
                    <li>
                      <a href="#0">+62 812 3456 7890</a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div className="footer-bottom space-between center-content-mobile text-xxs">
              <FooterNav />
              <FooterSocial />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;