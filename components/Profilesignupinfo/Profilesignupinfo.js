import React from "react";
import styles from "./Profilesignupinfo.module.scss";

function Profilesignupinfo() {
  return (
    <>
      <form action="">
        <section className={styles["Signupinfo-pinfo-container"]}>
          <div className={styles["Signupinfo-header-container"]}>
            <h1>Profile Info</h1>
            <div className={styles["Signupinfo-searchbar-container"]}>
              <input type="text" />
              <svg
                width="31"
                height="37"
                viewBox="0 0 31 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 37C17.6313 37 19.375 35.2923 19.375 33.2051H11.625C11.625 35.2923 13.3494 37 15.5 37ZM27.125 25.6154V16.1282C27.125 10.3031 23.9475 5.42667 18.4062 4.13641V2.84615C18.4062 1.27128 17.1081 0 15.5 0C13.8919 0 12.5938 1.27128 12.5938 2.84615V4.13641C7.03313 5.42667 3.875 10.2841 3.875 16.1282V25.6154L0 29.4103V31.3077H31V29.4103L27.125 25.6154Z"
                  fill="#1E204C"
                />
              </svg>
            </div>
          </div>

          <div className={styles["Signupinfo-content-container"]}>
            <div>
              <div className={styles["Signupinfo-info-container"]}>
                <h4>Profile</h4>
                <div>
                  <div className={styles["Signupinfo-profilephoto-container"]}>
                    <svg
                      width="140"
                      height="139"
                      viewBox="0 0 140 139"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M70.0007 0C31.8207 0 0.833984 30.9867 0.833984 69.1667C0.833984 107.347 31.8207 138.333 70.0007 138.333C108.181 138.333 139.167 107.347 139.167 69.1667C139.167 30.9867 108.181 0 70.0007 0ZM70.0007 20.75C81.4823 20.75 90.7507 30.0183 90.7507 41.5C90.7507 52.9817 81.4823 62.25 70.0007 62.25C58.519 62.25 49.2507 52.9817 49.2507 41.5C49.2507 30.0183 58.519 20.75 70.0007 20.75ZM70.0007 118.967C52.709 118.967 37.4232 110.113 28.5007 96.695C28.7082 82.9308 56.1673 75.3917 70.0007 75.3917C83.7648 75.3917 111.293 82.9308 111.501 96.695C102.578 110.113 87.2923 118.967 70.0007 118.967Z"
                        fill="#1E204C"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className={styles["Signupinfo-info-container"]}>
                <h4>Name</h4>
                <input type="text" />
              </div>

              <div className={styles["Signupinfo-info-container"]}>
                <h4>Title</h4>
                <input type="text" />
              </div>

              <div className={styles["Signupinfo-info-container"]}>
                <h4>About</h4>
                <textarea name="" id="" cols="22" rows="2"></textarea>
              </div>

              <div className={styles["Signupinfo-info-container"]}>
                <h4>Skills</h4>
                <div className={styles["Signupinfo-updating-container"]}></div>
              </div>

              <div className={styles["Signupinfo-info-container"]}>
                <h4>Preferences</h4>
                <div className={styles["Signupinfo-updating-container"]}></div>
              </div>
            </div>

            <div className={styles["Signupinfo-Contactinfo-container"]}>
              <h3>Contact Info</h3>
              <div className={styles["Signupinfo-info-container"]}>
                <h4>Phone number</h4>
                <input type="number" />
              </div>

              <div className={styles["Signupinfo-info-container"]}>
                <h4>E-mail ID</h4>
                <input type="email" />
              </div>

              <section className={styles["Signupinfo-socials-container"]}>
                <h1>Socials</h1>

                <div className={styles["Signupinfo-socialinfo-container"]}>
                  <div>
                    <h4>Connected</h4>
                    <div
                      className={styles["Signupinfo-socialplatform-container"]}
                    >
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M52.5 0H7.5C3.36375 0 0 3.36375 0 7.5V52.5C0 56.6362 3.36375 60 7.5 60H30V39.375H22.5V30H30V22.5C30 19.5163 31.1853 16.6548 33.295 14.545C35.4048 12.4353 38.2663 11.25 41.25 11.25H48.75V20.625H45C42.93 20.625 41.25 20.43 41.25 22.5V30H50.625L46.875 39.375H41.25V60H52.5C56.6362 60 60 56.6362 60 52.5V7.5C60 3.36375 56.6362 0 52.5 0Z"
                          fill="#1E204C"
                        />
                      </svg>
                      <svg
                        width="64"
                        height="62"
                        viewBox="0 0 64 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31.9999 0C24.4014 0.000312963 17.051 2.68611 11.2639 7.57684C5.47674 12.4676 1.63048 19.244 0.413311 26.6938C-0.803858 34.1435 0.6875 41.7804 4.62053 48.2379C8.55357 54.6954 14.6716 59.5522 21.88 61.9392C23.48 62.2173 24.08 61.2638 24.08 60.4294C24.08 59.6746 24.0399 57.1715 24.0399 54.5097C16 55.9796 13.92 52.563 13.28 50.7751C12.5698 49.0363 11.4441 47.4954 10 46.2855C8.88002 45.6896 7.28004 44.2196 9.95998 44.1799C10.9833 44.2902 11.9648 44.6439 12.8212 45.211C13.6777 45.7781 14.3839 46.5419 14.88 47.4377C15.3176 48.2186 15.9062 48.9061 16.6118 49.4607C17.3174 50.0154 18.1263 50.4262 18.9921 50.6698C19.8578 50.9134 20.7635 50.9849 21.6571 50.8803C22.5508 50.7756 23.4149 50.4968 24.1999 50.0599C24.3384 48.444 25.0634 46.9333 26.2399 45.8089C19.12 45.0143 11.68 42.2728 11.68 30.1155C11.635 26.9566 12.8086 23.9004 14.96 21.5735C13.9817 18.8281 14.0962 15.8152 15.28 13.1508C15.28 13.1508 17.9599 12.3164 24.0799 16.4086C29.316 14.9782 34.8437 14.9782 40.0798 16.4086C46.1997 12.2767 48.8797 13.1508 48.8797 13.1508C50.0637 15.8151 50.1782 18.8281 49.1997 21.5735C51.3576 23.8964 52.5322 26.9553 52.4797 30.1155C52.4797 42.3125 44.9997 45.0143 37.8798 45.8089C38.6435 46.5777 39.2317 47.5007 39.6044 48.5153C39.9771 49.5299 40.1256 50.6123 40.0398 51.6889C40.0398 55.9401 39.9998 59.3568 39.9998 60.4295C39.9998 61.2639 40.5998 62.2571 42.1998 61.9393C49.3954 59.5328 55.4959 54.6647 59.4122 48.2039C63.3285 41.7431 64.8057 34.1101 63.5801 26.6676C62.3544 19.225 58.5058 12.4574 52.7212 7.57259C46.9366 2.68782 39.5925 0.00392504 31.9999 0Z"
                          fill="#1E204C"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h4>Connect</h4>
                    <div
                      className={styles["Signupinfo-socialplatform-container"]}
                    >
                      <svg
                        width="61"
                        height="61"
                        viewBox="0 0 61 61"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M56.4894 0.000426478H4.51056C3.92627 -0.0076395 3.3461 0.09878 2.80319 0.313608C2.26028 0.528435 1.76527 0.847463 1.34641 1.25247C0.927555 1.65748 0.593067 2.14053 0.362048 2.67405C0.131028 3.20756 0.00800362 3.78109 0 4.36187V56.6381C0.00800362 57.2189 0.131028 57.7924 0.362048 58.3259C0.593067 58.8595 0.927555 59.3425 1.34641 59.7475C1.76527 60.1525 2.26028 60.4716 2.80319 60.6864C3.3461 60.9012 3.92627 61.0076 4.51056 60.9996H56.4894C57.0737 61.0076 57.6539 60.9012 58.1968 60.6864C58.7397 60.4716 59.2347 60.1525 59.6536 59.7475C60.0724 59.3425 60.4069 58.8595 60.638 58.3259C60.869 57.7924 60.992 57.2189 61 56.6381V4.36187C60.992 3.78109 60.869 3.20756 60.638 2.67405C60.4069 2.14053 60.0724 1.65748 59.6536 1.25247C59.2347 0.847463 58.7397 0.528435 58.1968 0.313608C57.6539 0.09878 57.0737 -0.0076395 56.4894 0.000426478ZM18.5025 51.0567H9.29728V23.6071H18.5025V51.0567ZM13.8999 19.7641C12.6304 19.7641 11.4129 19.2629 10.5152 18.3706C9.61749 17.4783 9.11318 16.2681 9.11318 15.0062C9.11318 13.7443 9.61749 12.5341 10.5152 11.6418C11.4129 10.7496 12.6304 10.2483 13.8999 10.2483C14.574 10.1723 15.2567 10.2387 15.9032 10.4431C16.5497 10.6476 17.1455 10.9854 17.6515 11.4346C18.1575 11.8838 18.5624 12.4341 18.8396 13.0496C19.1169 13.6651 19.2602 14.3319 19.2602 15.0062C19.2602 15.6806 19.1169 16.3473 18.8396 16.9628C18.5624 17.5783 18.1575 18.1287 17.6515 18.5778C17.1455 19.027 16.5497 19.3649 15.9032 19.5693C15.2567 19.7737 14.574 19.8401 13.8999 19.7641ZM51.7027 51.0567H42.4975V36.3254C42.4975 32.635 41.1781 30.2255 37.8335 30.2255C36.7984 30.233 35.7905 30.5558 34.9456 31.1502C34.1007 31.7446 33.4594 32.5821 33.1082 33.55C32.868 34.2668 32.764 35.0218 32.8013 35.7764V51.0262H23.5961C23.5961 51.0262 23.5961 26.0776 23.5961 23.5766H32.8013V27.45C33.6375 26.0077 34.8538 24.8195 36.3191 24.0134C37.7843 23.2072 39.4431 22.8137 41.1167 22.8751C47.2535 22.8751 51.7027 26.8096 51.7027 35.2579V51.0567Z"
                          fill="#1E204C"
                        />
                      </svg>
                      <svg
                        width="59"
                        height="59"
                        viewBox="0 0 59 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.5 0C23.6655 0 17.9619 1.73014 13.1107 4.97164C8.25944 8.21315 4.47835 12.8204 2.24557 18.2108C0.0127819 23.6013 -0.571416 29.5327 0.566847 35.2552C1.70511 40.9776 4.51471 46.234 8.64036 50.3596C12.766 54.4853 18.0224 57.2949 23.7448 58.4332C29.4673 59.5714 35.3987 58.9872 40.7892 56.7544C46.1796 54.5216 50.7868 50.7406 54.0284 45.8893C57.2699 41.0381 59 35.3345 59 29.5C59 25.626 58.237 21.7899 56.7544 18.2108C55.2719 14.6317 53.099 11.3797 50.3596 8.64035C47.6203 5.90102 44.3683 3.72807 40.7892 2.24555C37.2101 0.76304 33.374 0 29.5 0ZM29.5 5.9C35.5615 5.89758 41.3878 8.24504 45.7545 12.449C41.247 15.0928 36.4705 17.2486 31.506 18.88C29.0353 14.6226 26.2027 10.5859 23.0395 6.8145C25.1398 6.20974 27.3144 5.90192 29.5 5.9ZM17.3755 9.2925C20.4662 12.8281 23.24 16.6285 25.665 20.65C19.8745 22.0878 13.9314 22.8208 7.96501 22.833H6.90301C8.57626 17.1679 12.3131 12.3363 17.3755 9.2925ZM11.8 45.1645C7.96133 40.8538 5.85895 35.272 5.90001 29.5C5.90001 29.205 5.90001 28.91 5.90001 28.6445H7.90601C14.8898 28.5821 21.8341 27.59 28.556 25.6945C29.5 27.494 30.385 29.3525 31.2405 31.27C26.6429 32.8908 22.361 35.2962 18.585 38.3795L17.7 39.0875C15.597 40.9762 13.6257 43.0066 11.8 45.1645ZM29.5 53.1C24.798 53.1104 20.2022 51.7019 16.3135 49.0585C17.7497 47.4112 19.2866 45.8545 20.9155 44.3975L21.8595 43.601C25.3498 40.6654 29.3495 38.3956 33.6595 36.9045C35.4334 41.7012 36.8147 46.6341 37.7895 51.6545C35.1339 52.6241 32.327 53.1135 29.5 53.1ZM43.1585 48.7045C42.1933 44.2398 40.9319 39.8445 39.3825 35.5475H40.3855C40.5018 35.5187 40.6233 35.5187 40.7395 35.5475H41.064H41.359H42.775C45.8795 35.5564 48.9605 36.0848 51.8905 37.111C50.2808 41.8026 47.2233 45.862 43.1585 48.7045ZM42.775 29.5C42.1555 29.5 41.536 29.5 40.946 29.5C40.564 29.4519 40.1775 29.4519 39.7955 29.5C38.9937 29.5492 38.1957 29.6478 37.406 29.795H37.111C36.2555 27.8185 35.3705 25.901 34.397 23.895C39.6793 22.0809 44.7527 19.7074 49.5305 16.815C51.9006 20.6186 53.1387 25.0185 53.1 29.5C53.1 30.0015 53.1 30.503 53.1 31.0045C49.7567 29.9726 46.2737 29.4651 42.775 29.5Z"
                          fill="#1E204C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default Profilesignupinfo;
