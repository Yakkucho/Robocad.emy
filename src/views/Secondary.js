import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import Testimonial from '../components/sections/Testimonial';
import Clients from '../components/sections/Clients';
import Team from '../components/sections/Team';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';

class Secondary extends React.Component {

  state = {
    demoModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  render() {

    const genericSection01Header = {
      title: 'Newsletter modal is a component commonly used'
    }    

    const genericSection02Header = {
      title: 'Button is a component commonly used'
    }

    const genericSection03Header = {
      title: 'Input form is a component commonly used'
    }

    const genericSection04Header = {
      title: 'Pertanyaan Umum (FAQ)'
    }    

    return (
      <React.Fragment>
        <Testimonial className="has-bg-color-cut illustration-section-02" />
        <Clients topDivider bottomDivider />
        <Team />
        <FeaturesSplit invertMobile imageFill topDivider />

        {/* <GenericSection topDivider>
          <div className="container-xs">
            <h2 className="mt-0">Lorem ipsum is placeholder text commonly used in the graphic.</h2>
            <p>
              Lorem ipsum dolor sit amet, <a href="#0">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <figure>
              <Image
                className="image-larger"
                src={require('./../assets/images/image-placeholder.jpg')}
                alt="Placeholder"
                width={712}
                height={400} />
              <figcaption className="text-color-low">A super-nice image <span role="img" aria-label="mile">😀</span></figcaption>
            </figure>
            <h4>Flexibility</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </GenericSection>   

        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection01Header} className="center-content" />
            <div className="center-content">
              <Button
                color="secondary"
                aria-controls="demo-modal"
                onClick={this.openModal}>Open modal</Button>
            </div>
            <Modal
              id="demo-modal"
              show={this.state.demoModalActive}
              handleClose={this.closeModal}
            >
              <div className="center-content">
                <h3 className="mt-16 mb-8">Join our newsletter</h3>
                <p className="text-sm">
                  Magnis dis parturient montes nascetur. Quam quisque id diam vel quam integer.
                </p>
              </div>
              <form style={modalFormStyle}>
                <div className="mb-12">
                  <Input
                    type="email"
                    label="This is a label"
                    placeholder="Your best email"
                    labelHidden />
                </div>
                <Button color="primary" wide>Subscribe</Button>
              </form>
              <div className="center-content mt-24">
                <a
                  className="text-xs"
                  aria-label="close"
                  href="#0"
                  onClick={this.closeModal}
                >No thanks!</a>
              </div>
            </Modal>
          </div >
        </GenericSection>            

        <GenericSection topDivider className="center-content">
          <div className="container">
            <SectionHeader data={genericSection02Header} className="center-content" />
            <ButtonGroup>
              <Button color="primary" wideMobile>Get started now</Button>
              <Button color="secondary" wideMobile>Get started now</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="dark" wideMobile>Get started now</Button>
              <Button wideMobile>Get started now</Button>
            </ButtonGroup>
          </div>
        </GenericSection>

        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection03Header} className="center-content" />
            <form style={formStyle}>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden>
                  <Button color="primary">Early access</Button>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  defaultValue="hello@cruip.com"
                  formGroup="desktop"
                  labelHidden>
                  <Button color="primary" loading>Early access</Button>
                </Input>
              </div>              
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden
                  status="error"
                  hint="Something is wrong.">
                  <Button color="primary">Early access</Button>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden
                  status="success"
                  hint="You've done it.">
                  <Button color="primary">Early access</Button>
                </Input>
              </div>
            </form>
          </div>
        </GenericSection> */}

        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection04Header} className="center-content" />
            <Accordion>
              <AccordionItem title="Apakah saya perlu latar belakang pemrograman atau robotika untuk bergabung?" active>
                Tidak harus. Kami memiliki berbagai program yang dirancang untuk semua tingkatan, mulai dari pemula absolut hingga mereka yang ingin memperdalam keahlian. Program dasar kami akan memandu Anda dari nol, sementara program lanjutan ditujukan bagi yang sudah memiliki fondasi.
              </AccordionItem>
              <AccordionItem title="Bagaimana metode pembelajaran di Robocad?">
                Kami menerapkan metode <i>project-based learning</i> (pembelajaran berbasis proyek). Sekitar 70% waktu belajar akan dihabiskan untuk praktik langsung, simulasi, dan mengerjakan studi kasus nyata. Sisanya adalah sesi teori dan bimbingan intensif dari para instruktur ahli.
              </AccordionItem>
              <AccordionItem title="Apa saja yang saya dapatkan setelah menyelesaikan program?">
                Setelah lulus, Anda akan mendapatkan sertifikat kompetensi yang diakui industri, portofolio proyek yang solid untuk ditunjukkan kepada perusahaan, serta keahlian praktis yang siap kerja di bidang automasi dan robotika.
              </AccordionItem>
              <AccordionItem title="Apakah ada jaminan kerja setelah lulus?">
                Kami tidak memberikan jaminan kerja, namun kami memiliki tim <i>career support</i> khusus yang akan membantu Anda. Layanan ini mencakup persiapan CV, simulasi wawancara, dan menghubungkan Anda dengan jaringan mitra industri kami yang aktif mencari talenta baru.
              </AccordionItem>
              <AccordionItem title="Bagaimana cara saya mendaftar?">
                Proses pendaftaran sangat mudah. Anda bisa mengunjungi halaman 'Pendaftaran' di situs kami, mengisi formulir online, dan mengikuti instruksi selanjutnya. Jika ada pertanyaan, tim admisi kami siap membantu melalui halaman 'Kontak'.
              </AccordionItem>
            </Accordion>
          </div>
        </GenericSection>      

        <Cta invertColor split className="has-bg-color-cut" />
      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: '420px',
  margin: '0 auto'
}

const modalFormStyle = {
  maxWidth: '320px',
  margin: '0 auto'
}

export default Secondary;