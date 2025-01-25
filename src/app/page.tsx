import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <header className="mt-5 flex px-10 shadow-xl items-center justify-between text-lg font-bold h-20 z-30 rounded-[50px] w-11/12 mx-auto bg-gradient-to-r from-[#D4ED86] to-[#ebecf0]">
        <div className="flex justify-around items-center w-6/12">
          <p className="bg-white rounded-[50px] px-5 shadow-inner">خانه</p>
          <p>نارین اسانس</p>
          <p>محصولات</p>
          <p>همکاران</p>
          <p>نظرات</p>
          <p>ارتباط با ما</p>
        </div>
        <Image
          className="w-16"
          src={'/images/logo.png'}
          width={1000}
          height={1000}
          alt={'Narin'}
        />
      </header>


      <main className="relative w-full mb-20">

        <div className="w-full z-20 flex justify-between">

          <div className="w-8/12 flex flex-col justify-center  text-center items-end -mt-96">
            <p className=" text-[64px] font-bold text-center -mr-5">از طبیعت تا سفره شما</p>
            <p className="w-9/12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="w-9/12 flex font-semibold text-lg justify-between mt-10">
              <button className="bg-[#FF8280]  text-white shadow-2xl rounded-3xl w-5/12 py-3">ثبت سفارش</button>
              <button className="bg-gradient-to-b from-[#DCDECD] via-[#E9EBE8] to-[#ECF0EB] border-2 border-white shadow-2xl rounded-3xl w-5/12 py-3">نارین اسانس</button>
            </div>
          </div>

          <Image
            className="-mt-16 w-7/12"
            src={'/images/hero-wave.png'}
            width={850}
            height={500}
            alt={'Narin'} />
          <Image
            className="absolute right-0"
            src={'/images/bowl.webp'}
            width={750}
            height={500}
            alt={'Narin'} />
        </div>

        <div className="w-9/12 -mt-80 mx-auto flex justify-between items-center">
          <div className="h-48 w-48 rounded-full flex justify-center items-center flex-wrap text-lg p-5 text-center bg-[#EBF3D7] shadow-xl">
            مواد اولیه از اروپا میاد و در ایران تولید می شود
          </div>
          <div className="h-48 w-48 rounded-full flex justify-center items-center flex-wrap text-lg p-5 text-center bg-[#EBF3D7] shadow-xl">
            بهترین کیفیت و بو و ماندگاری را دارد
          </div>
          <div className="h-48 w-48 rounded-full flex justify-center items-center flex-wrap text-lg p-5 text-center bg-[#EBF3D7] shadow-xl">
            مواد اولیه از اروپا میاد و در ایران تولید می شود
          </div>
          <div className="h-48 w-48 rounded-full flex justify-center items-center flex-wrap text-lg p-5 text-center bg-[#EBF3D7] shadow-xl">
            بهترین کیفیت و بو و ماندگاری را دارد
          </div>
        </div>

        <div className="w-10/12 z-20 p-10 relative shadow-xl mx-auto bg-white rounded-[56px] mt-10">
          <Image
            className="absolute w-3/12 right-0 top-0"
            src={'/images/card-line.png'}
            width={300}
            height={300}
            alt={'Narin'} />
          <p className="text-center text-3xl font-semibold py-5">Enabling the real-time Digital Business</p>

          <div className="w-full flex justify-start px-20">
            <div className="w-5/12 flex-col mt-10 rounded-3xl flex items-center gap-y-5 justify-center p-5 shadow-xl h-44 bg-gradient-to-br from-[#EBF3D7]">
              <p className="text-xl">Application Modernization:</p>
              <p>Simplify the design, deployment and management of stateful Cloud-native applications to ease & accelerate service delivery </p>
            </div>
          </div>

          <div className="w-full flex justify-end px-20">
            <div className="w-5/12 flex-col mt-10 rounded-3xl flex items-center gap-y-5 justify-center p-5 shadow-xl h-44 bg-gradient-to-br from-[#EBF3D7]">
              <p className="text-xl">Application Modernization:</p>
              <p>Simplify the design, deployment and management of stateful Cloud-native applications to ease & accelerate service delivery </p>
            </div>
          </div>
        </div>

        <div className="absolute z-20 -left-54 bottom-64">
          <Image
            src={'/images/dots-1.png'}
            width={200}
            height={200}
            alt={'Narin'}
          />
        </div>

        <div className="absolute z-20 right-0 bottom-0">
          <Image
            src={'/images/dots-2.png'}
            width={150}
            height={150}
            alt={'Narin'}
          />
        </div>


      </main>

      <section className="relative">
        <div className="absolute z-10 -mt-72 left-0">
          <Image
            src={'/images/wave-2.png'}
            width={1000}
            height={300}
            alt={'Narin'}
          />
        </div>
        <div className="absolute  z-30 -bottom-64">
          <Image
            src={'/images/dots-1.png'}
            width={200}
            height={200}
            alt={'Narin'}
          />
        </div>

        <div className="w-10/12 z-20 p-10 relative shadow-xl mx-auto bg-white rounded-[56px] my-20">
          <Image
            className="absolute rotate-45 right-0 top-0"
            src={'/images/clives.png'}
            width={100}
            height={100}
            alt={'Narin'}
          />
          <Image
            className="absolute left-0 bottom-0"
            src={'/images/clives.png'}
            width={100}
            height={100}
            alt={'Narin'}
          />

          <p className="text-center text-6xl text-[#003966] py-5 ">Complex events made <span className="!font-[900]">easy</span> ™</p>

          <div className="flex flex-col justify-center items-center">
            <Image
              src={'/images/divider.png'}
              width={300}
              height={100}
              alt={'Narin'} />

            <p className="w-5/12 text-center text-[#004060] mt-10">
              Declaratively model “intent-based” services and chain services into event-driven dataflow processes. The platform supports monitoring and the use of event-based triggers to maintain declarative state for closed-loop automation.
            </p>
          </div>

          <div className="flex w-8/12 mx-auto gap-5 mt-10 flex-row justify-between items-center">
            <div className="flex w-5/12">
              <Image
                className="w-full h-full"
                src={'/images/orange.png'}
                width={500}
                height={500}
                alt={'Narin'} />
            </div>
            <div className="w-7/12 overflow-visible text-[#004060] text-sm pl-10 flex flex-col gap-y-2">
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#004060]" />
                <p className="pl-3">Complex async/concurrent multi-domain coordination</p>
              </div>
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#004060]" />
                <p className="pl-3">Multi-step async/concurrent operations</p>
              </div>
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#004060]" />
                <p className="pl-3">Long-running async/concurrent processes</p>
              </div>
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#004060]" />
                <p className="pl-3">Distributed transactions</p>
              </div>
              <button className="bg-[#FF8280] shadow-xl mt-5 font-bold text-black w-5/12 py-3 rounded-3xl">
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="relative mt-10">
        <div className="absolute z-10 -mb-64 right-0">
          <Image
            src={'/images/wave-3.png'}
            width={1000}
            height={300}
            alt={'Narin'}
          />
        </div>
        <div className="absolute z-20 right-0 -top-44">
          <Image
            src={'/images/dots-2.png'}
            width={150}
            height={150}
            alt={'Narin'}
          />
        </div>


        <div className="w-10/12 z-20 p-10 relative shadow-xl mx-auto bg-white rounded-[56px] my-20">
          <Image
            className="absolute left-0 -rotate-90 bottom-0"
            src={'/images/clives.png'}
            width={100}
            height={100}
            alt={'Narin'}
          />

          <Image
            className="mx-auto -mt-32"
            src={'/images/wine.png'}
            width={600}
            height={600}
            alt={'Narin'}
          />
          <p className="text-center text-6xl py-5 w-6/12 mx-auto">Integrate, orchestrate, automate anything!</p>

          <div className="flex flex-col justify-center items-center">
            <Image
              src={'/images/divider.png'}
              width={300}
              height={100}
              alt={'Narin'} />

          </div>

          <div className="flex w-8/12 mx-auto gap-5 mt-10 flex-row justify-between items-center">

            <div className="flex w-6/12">
              <p>
                The model-driven platform provides a consistency layer so development teams can reason over diverse & distributed service elements, manage complex dependencies and trouble-shoot issues. The model provides shared metadata, relationships and types for interoperability and automation. Developers declaratively compose services and the runtime binds necessary middleware services to implement them. EnterpriseWeb no-code platform liberates developers from tedious & repetitive integration tasks so they can focus on the business.
              </p>
            </div>

            <div className="w-6/12 overflow-visible text-[#004060] justify-between font-semibold text-lg pl-10 flex flex-col gap-y-2">
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#F8EB4F]" />
                <p className="pl-3">People & Processes</p>
              </div>
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#F8EB4F]" />
                <p className="pl-3">Systems & Services</p>
              </div>
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#F8EB4F]" />
                <p className="pl-3">Databases & Devices</p>
              </div>
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#F8EB4F]" />
                <p className="pl-3">Applications & Artifacts</p>
              </div>
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#F8EB4F]" />
                <p className="pl-3">Infrastructure & Networks</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button className="bg-[#FF8280] shadow-xl mt-5 font-bold text-black w-3/12 mx-auto py-3 rounded-3xl">
              Get A Quote
            </button>
          </div>


        </div>
      </section>

      {/* /////////////////////////////////////////////// */}


      <section className="relative">
        <div className="w-10/12 z-20 p-10 relative shadow-xl mx-auto bg-white rounded-[56px] my-20">
          <Image
            className="absolute rotate-45 right-0 top-0"
            src={'/images/clives.png'}
            width={100}
            height={100}
            alt={'Narin'}
          />
          <Image
            className="absolute left-0 bottom-0"
            src={'/images/clives.png'}
            width={100}
            height={100}
            alt={'Narin'}
          />
          <Image
            className="absolute -left-40 -rotate-45 top-0"
            src={'/images/card-line.png'}
            width={250}
            height={250}
            alt={'Narin'}
          />

          <p className="text-center text-6xl text-[#003966] py-5 ">Context-as-a-Service</p>

          <div className="flex flex-col justify-center items-center">
            <Image
              src={'/images/divider.png'}
              width={300}
              height={100}
              alt={'Narin'} />

            <p className="w-5/12 text-center text-[#004060] mt-10">
              The graph domain model efficiently hydrates context for stateless services. It supports stateful Cloud-native applications that are highly-responsive. The platform runtime can leverage local & global context to interpret events, automate decisions and customize payload(s) for every system interaction.
            </p>
          </div>

          <div className="flex w-8/12 mx-auto gap-5 mt-10 flex-row justify-between items-center">
            <div className="flex w-5/12">
              <Image
                className="w-full h-full"
                src={'/images/lemons.png'}
                width={500}
                height={500}
                alt={'Narin'} />
            </div>
            <div className="w-6/12 overflow-visible text-[#004060] text-sm pl-10 flex flex-col gap-y-2">
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#004060]" />
                <p className="pl-3">Personalize user-experiences</p>
              </div>
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#004060]" />
                <p className="pl-3">Synchronize operations</p>
              </div>
              <div className="flex items-center">
                <span className="size-3 rounded-full bg-[#004060]" />
                <p className="pl-3">Optimize transactions</p>
              </div>

              <button className="bg-[#FF8280] shadow-xl mt-5 font-bold text-black w-5/12 py-3 rounded-3xl">
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* /////////////////////////////////////////////// */}


      <section className="relative mt-10">
        <div className="absolute z-10 -bottom-72 left-0">
          <Image
            src={'/images/neo-wave.png'}
            width={300}
            height={300}
            alt={'Narin'}
          />
        </div>
        <div className="absolute z-20 right-0 -top-44">
          <Image
            src={'/images/dots-2.png'}
            width={150}
            height={150}
            alt={'Narin'}
          />
        </div>


        <div className="w-10/12 z-20 p-10 relative mx-auto rounded-[56px] my-20">
          <p className="text-center text-6xl py-5 w-6/12 mx-auto font-semibold">همکاران ما</p>

          <div className="flex flex-col justify-center items-center">
            <Image
              src={'/images/divider.png'}
              width={300}
              height={100}
              alt={'Narin'} />

          </div>

          <div className="flex w-9/12 mx-auto gap-5 text-2xl text-white mt-10 flex-row justify-between items-center">
            <div className="w-3/12 text-center flex justify-center items-center shadow-xl rounded-3xl h-28 p-5 bg-[#FF8280]">
              شرکت بیستکوئیت ساناز طلایی
            </div>
            <div className="w-3/12 text-center flex justify-center items-center shadow-xl rounded-3xl h-28 p-5 bg-[#FF8280]">
              شرکت لواشک شایلین زنگنه
            </div>
            <div className="w-3/12 text-center flex justify-center items-center shadow-xl rounded-3xl h-28 p-5 bg-[#FF8280]">
              شرکت تنباکو فاخر مزایا
            </div>
          </div>

        </div>
      </section>



      {/* /////////////////////////////////////////////// */}


      <section className="relative mt-10">
        <div className="absolute z-10 -bottom-28 right-0">
          <Image
            src={'/images/wave-4.png'}
            width={500}
            height={500}
            alt={'Narin'}
          />
        </div>
        <div className="absolute z-20 right-0 top-1/4">
          <Image
            src={'/images/dots-2.png'}
            width={150}
            height={150}
            alt={'Narin'}
          />
        </div>
        <div className="absolute z-20 rotate-90 right-10 top-1/4">
          <Image
            src={'/images/clives.png'}
            width={100}
            height={100}
            alt={'Narin'}
          />
        </div>


        <div className="w-10/12 z-20 p-10 relative mx-auto rounded-[56px] my-20">
          <p className="text-center font-semibold text-6xl py-5 w-6/12 text-[#5F615A] mx-auto">نظرات</p>

          <div className="flex flex-col justify-center items-center">
            <Image
              src={'/images/divider.png'}
              width={300}
              height={100}
              alt={'Narin'} />

          </div>

          <div className="flex w-10/12 mx-auto gap-5 mt-10 pt-5 flex-row justify-between items-center">
            <div className="w-4/12 items-start text-center p-5 flex flex-col shadow-xl rounded-3xl bg-[#EBF3D7]">
              <Image
                src={'/images/person.png'}
                width={100}
                height={100}
                alt={'Narin'} />
              <p className="text-right">اسانس شرکت شما یکی از بهترین و باکیفیت ترین اسانس های موجود در کشوره و من به خیلی ها معرفیتون کردم</p>
              <p className="font-bold mt-5">--- Sarina Amini</p>
            </div>
            <div className="w-4/12 items-start text-center p-5 flex flex-col shadow-xl rounded-3xl bg-[#EBF3D7]">
              <Image
                src={'/images/person.png'}
                width={100}
                height={100}
                alt={'Narin'} />
              <p className="text-right">اسانس شرکت شما یکی از بهترین و باکیفیت ترین اسانس های موجود در کشوره و من به خیلی ها معرفیتون کردم</p>
              <p className="font-bold mt-5">--- Sarina Amini</p>
            </div>
            <div className="w-4/12 items-start text-center p-5 flex flex-col shadow-xl rounded-3xl bg-[#EBF3D7]">
              <Image
                src={'/images/person.png'}
                width={100}
                height={100}
                alt={'Narin'} />
              <p className="text-right">اسانس شرکت شما یکی از بهترین و باکیفیت ترین اسانس های موجود در کشوره و من به خیلی ها معرفیتون کردم</p>
              <p className="font-bold mt-5">--- Sarina Amini</p>
            </div>
          </div>
        </div>
      </section>


      <div className="w-9/12 px-10 mx-auto flex justify-between items-center -mt-10 rounded-[3em] bg-gradient-to-r from-[#EBF3D7] to-[#EDF0EBED] py-10 my-20 !z-20 shadow-xl" >
        <div className="flex gap-x-5 items-center">
          <span>
            <Image
              src={'/images/instagram.png'}
              width={50}
              height={50}
              alt={'Narin'} />
          </span>
          <span>
            <Image
              src={'/images/whatsapp.png'}
              width={50}
              height={50}
              alt={'Narin'} />
          </span>
          <span>
            <Image
              src={'/images/telegram.png'}
              width={50}
              height={50}
              alt={'Narin'} />
          </span>
        </div>
        <p className="font-bold text-3xl text-[#686868]">با ما از طریق صحفات مجازی در ارتباط باشید</p>
      </div>

      <footer className="w-11/12 text-white mx-auto justify-center flex -mt-28 rounded-[3em] bg-[#C7BB80] py-20 mb-5 !z-10 shadow-xl" >
        <div className="w-3/12 flex flex-col items-start">
          <Image
            src={'/images/logo.png'}
            width={100}
            height={100}
            alt={'Narin'}
          />
          <p className="mt-5 pr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!</p>
        </div>
        <div className="w-3/12 gap-y-3 flex flex-col items-start">
          <p className="font-bold text-2xl">Important Links</p>
          <div className="flex gap-x-2 mt-16 items-center">
            <Image
              src={'/images/right-arrow.png'}
              width={20}
              height={20}
              alt={'Narin'} />
            <p className="">Terms & condition</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Image
              src={'/images/right-arrow.png'}
              width={20}
              height={20}
              alt={'Narin'} />
            <p className="">Terms & condition</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Image
              src={'/images/right-arrow.png'}
              width={20}
              height={20}
              alt={'Narin'} />
            <p className="">Terms & condition</p>
          </div>
        </div>
        <div className="w-3/12 flex flex-col gap-y-3 items-start">
          <p className="font-bold text-2xl">Contact Details</p>
          <div className="flex gap-x-2 mt-16 items-center">
            <Image
              src={'/images/location.png'}
              width={20}
              height={20}
              alt={'Narin'} />
            <p className="">اتوبان ستاری جنوب ، بلوار فردوس غربی، سازمان برنامه جنوبی ، کوچه نوزدهم مرکزی پلاک ۳</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Image
              src={'/images/phone.png'}
              width={20}
              height={20}
              alt={'Narin'} />
            <p className="">0912-4801227</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <Image
              src={'/images/email.png'}
              width={20}
              height={20}
              alt={'Narin'} />
            <p className="">contact@enweb.com</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
