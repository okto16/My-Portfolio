const Card = () => {
  return (
    <div className="card glass w-96 shadow-xl outline outline-8 outline-base-200 rounded-lg mx-auto hover:md:animate-pulse mb-10">
      <figure className="px-10 pt-10">
        <img
          src="https://oktorino.vercel.app/images/avatar.png"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center">
        <p className="font-bold text-lg">It Consultant</p>
        <div className="flex gap-2 ">
        <h2 className="card-title text-sm">Pt Quantum Infra Solusindo</h2>
        <img className="w-7" src="https://media.licdn.com/dms/image/v2/C560BAQFV-bqQ0hcB9g/company-logo_200_200/company-logo_200_200/0/1673072092168/pt_quantum_infra_solusindo_logo?e=2147483647&v=beta&t=yYYf04e4PhkKS27oCHhzY7fZYbVoQ809402AG0YSta8" alt="" />
        </div>
        <h2 className="card-title text-md">Oktorino Bagas Aji Sudarno</h2>
        <h2 className="card-title text-sm">Divisi : R&D</h2>
      </div>
    </div>
  );
};
export default Card;
