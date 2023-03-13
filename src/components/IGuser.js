const IGuser = ({
  size = "small",
  showFollowing = "false",
  isFollowing = "false",
  account,
  location,
  avatar,
  id,
}) => {
  return (
    <>
      <div>
        <div
          className={`${size === "small" ? "fs-3" : "fs-4"}`}
          style={{
            backgroundImage: `url(${avatar})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div>
            <p>{account}</p>
            <p>{location}</p>
        </div>
        {showFollowing && (
            <p>
                {isFollowing ? "FOLLWING" : "FOLLOW"}
            </p>
        )}
      </div>
    </>
  );
};
export default IGuser;
