import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Roadmap extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Kurikulum',
      paragraph: 'Kurikulum intensif kami yang dirancang untuk membawa Anda dari nol hingga siap berkarir dalam waktu singkat.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>
              <TimelineItem title="Dasar Pemrograman & Elektronika">
                Membangun fondasi logika pemrograman dan pemahaman sirkuit elektronika dasar.
              </TimelineItem>
              <TimelineItem title="Desain Mekanik & Mikrokontroler">
                Merancang komponen robot dalam 3D CAD dan menghidupkannya dengan mikrokontroler.
              </TimelineItem>
              <TimelineItem title="Sensor Cerdas & Pengenalan AI">
                Mengintegrasikan berbagai sensor dan memberi kemampuan robot untuk 'melihat' lingkungannya.
              </TimelineItem>
              <TimelineItem title="Proyek Robotika Terapan">
                Mengaplikasikan semua skill dalam sebuah proyek akhir tim untuk memecahkan masalah nyata.
              </TimelineItem>
              <TimelineItem title="Pengembangan Portofolio & Persiapan Karir">
                Memoles portofolio proyek dan mempersiapkan diri untuk wawancara kerja di industri teknologi.
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;