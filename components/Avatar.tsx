import Image from 'next/image'

export default function Avatar({ author }) {


  return (
    <div className="d-flex items-center mt-4">
      <div className="relative">
        <Image
          src="/images/avatar.png"
          className="rounded d-inline"
          width="24px"
          height="24px"
        />
      </div>
      <p className="text-white relative mx-1">بواسطة: ابو جود</p>
      <span style={{color:"#fff"}} className="h-50 vr mx-2 "></span>
      <p className="text-white relative mx-1">منذ ١٤/٠٤/٢٠٢٢</p>
    </div>
  )
}
