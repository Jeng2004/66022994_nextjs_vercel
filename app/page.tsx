export default function Home() {
  return (
    <>
    <div className="font-sans text-gray-800">
      <header className="bg-blue-500 text-white text-center py-6">
        <h1 className="text-4xl font-bold">สุรพงศ์ พรมโลก</h1>
        <p className="text-lg">Full-Stack Developer | Web Enthusiast</p>
      </header>

      <main className="p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">เกี่ยวกับฉัน</h2>
          <p>
            สวัสดีครับ ผม สุรพงศ์ พรมโลก เป็นนักพัฒนาที่มีความหลงใหลในเทคโนโลยี 
            และการพัฒนาเว็บแอปพลิเคชันเพื่อแก้ไขปัญหาและสร้างคุณค่าใหม่ ๆ
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">ประวัติการศึกษา</h2>
          <ul className="list-disc pl-6">
            <li>ปริญญาตรี: วิศวกรรมคอมพิวเตอร์, มหาวิทยาลัย พะเยา</li>
            <li>มัธยม: โรงเรียนพูลเจริญวิทยาคม</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">ประสบการณ์การทำงาน</h2>
          <ul className="list-disc pl-6">
            <li>Frontend Developer - บริษัท ABC (2022 - 2023)</li>
            <li>Backend Intern - บริษัท XYZ (2021)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">โปรเจกต์ที่เคยทำ</h2>
          <ul className="list-disc pl-6">
            <li>ระบบจัดการร้านค้าออนไลน์ - React และ Node.js</li>
            <li>แอปติดตามการออกกำลังกาย - Flutter</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">ติดต่อ</h2>
          <p>Email: jenglovegtas@gmail.com</p>
          <p>Phone: 081-132-9758</p>
        </section>
      </main>
    </div>
    </>
  );
}