import profile from "../../assets/images/profile.png";
const Nav = () => {
    return (
        <>
            <nav className=" max-w-[1280px] mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="exo-2 text-[40px] font-bold">Knowledge Cafe</h1>
                    </div>
                    <div>
                        <img className="h-[50px] w-[50px]" src={profile} />
                    </div>
                </div>
                <hr className="opacity-5 my-1"></hr>
            </nav>

        </>
    );
};

export default Nav;