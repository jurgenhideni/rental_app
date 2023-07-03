import ContactForm from '@/components/ContactForm'
import Layout from '@/components/Layout'
import Img from '@/components/Img'

const Contact = () => {
  return (
    <Layout title='Contact Us' description=''>
      <div className='flex justify-between items-center gap-12'>
        <div>
          <Img
            src='/assets/contactus.jpg'
            alt='image'
            width={900}
            height={500}
            className='rounded-xl'
          />
        </div>
        <ContactForm />
      </div>
    </Layout>
  )
}

export default Contact
