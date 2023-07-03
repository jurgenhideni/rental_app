import Layout from '@/components/Layout'
import Img from '@/components/Img'

const About = () => {
  return (
    <Layout title='About Us' description='' url='/about'>
      <div className='text-center mb-[100px]'>
        <h1 className=' m-5 font-bold text-[4rem]'>
          ABOUT <span className='text-blue-400'>US</span>
        </h1>
        <p className='font-semibold'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          dolorum in provident voluptatem deserunt libero quibusdam hic nobis
          <br />
          sapiente nam sed dolorem, dolor esse aut perferendis exercitationem
          nisi magnam, non quaerat velit? Eum sapiente nobis, ducimus magnam
          magni
          <br />
          vitae dolor enim sint laudantium asperiores esse amet consequatur id
          officiis labore.
        </p>
      </div>
      <div className='bg-gradient-to-b from-slate-50 py-5'>
        <div className='flex justify-evenly my-[100px]'>
          <div className='max-w-[800px]'>
            <h2 className='font-semibold text-[2.5rem]'>
              OUR <span className='text-blue-400'>STORY</span>
            </h2>
            <p className='text-[1.1rem] leading-loose '>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              minima dignissimos, asperiores soluta consequatur eligendi
              corrupti quaerat veniam tempora repellat cumque! Reprehenderit
              harum nisi et quasi porro, libero quibusdam debitis soluta nostrum
              vel repellendus error laboriosam ex illum ducimus asperiores
              molestias officiis accusamus dolor quos? Blanditiis itaque dicta
              possimus doloribus consectetur consequatur velit quo facilis
              accusamus! Hic ducimus accusamus laudantium, in ea, consequatur
              porro dolor tenetur odio quaerat quibusdam nihil veritatis nulla
              possimus animi facilis officia exercitationem quo, cupiditate
              architecto accusantium voluptates.
            </p>
          </div>
          <Img
            src='/assets/story.png'
            width={400}
            height={400}
            alt='image'
            className='rounded-xl shadow-md'
          />
        </div>

        <div className='flex justify-evenly'>
          <Img
            src='/assets/approach.png'
            width={400}
            height={400}
            alt='image'
            className='rounded-xl shadow-md'
          />
          <div className='max-w-[800px]'>
            <h2 className='font-semibold text-[2.5rem]'>
              OUR <span className='text-blue-400'>APPROACH</span>
            </h2>
            <p className='text-[1.1rem] leading-loose '>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              minima dignissimos, asperiores soluta consequatur eligendi
              corrupti quaerat veniam tempora repellat cumque! Reprehenderit
              harum nisi et quasi porro, libero quibusdam debitis soluta nostrum
              vel repellendus error laboriosam ex illum ducimus asperiores
              molestias officiis accusamus dolor quos? Blanditiis itaque dicta
              possimus doloribus consectetur consequatur velit quo facilis
              accusamus! Hic ducimus accusamus laudantium, in ea, consequatur
              porro dolor tenetur odio quaerat quibusdam nihil veritatis nulla
              possimus animi facilis officia exercitationem quo, cupiditate
              architecto accusantium voluptates.
            </p>
          </div>
        </div>

        <div className='flex justify-evenly my-[100px]'>
          <div className='max-w-[800px]'>
            <h2 className='font-semibold text-[2.5rem]'>
              OUR <span className='text-blue-400'>MISSION</span>
            </h2>
            <p className='text-[1.1rem] leading-loose '>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              minima dignissimos, asperiores soluta consequatur eligendi
              corrupti quaerat veniam tempora repellat cumque! Reprehenderit
              harum nisi et quasi porro, libero quibusdam debitis soluta nostrum
              vel repellendus error laboriosam ex illum ducimus asperiores
              molestias officiis accusamus dolor quos? Blanditiis itaque dicta
              possimus doloribus consectetur consequatur velit quo facilis
              accusamus! Hic ducimus accusamus laudantium, in ea, consequatur
              porro dolor tenetur odio quaerat quibusdam nihil veritatis nulla
              possimus animi facilis officia exercitationem quo, cupiditate
              architecto accusantium voluptates.
            </p>
          </div>
          <Img
            src='/assets/mission.png'
            width={400}
            height={400}
            alt='image'
            className='rounded-xl shadow-md'
          />
        </div>
      </div>
    </Layout>
  )
}

export default About
