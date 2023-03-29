import Image from "next/image"
export default function GetInTouch(){
    return (
        <div className="flex w-[200px] h-[80px] relative"
          onClick={() => {
            window.open('https://g3slr1jsc65.typeform.com/to/FFPcjGzU')
          }}
        >

          <Image src="/Brand/public/GetinTouchBottom.svg" fill />
          <Image
            className="-translate-x-1 -translate-y-1 
                            hover:-translate-x-2 hover:-translate-y-2 
                            active:translate-x-0 active:translate-y-0"
            src="/Brand/public/GetinTouch.svg"
            fill
          />
        </div>
    )
}