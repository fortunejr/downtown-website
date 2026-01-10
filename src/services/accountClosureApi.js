/**
 * Account Closure API Service
 *
 * This file contains all API calls related to the account closure flow.
 * Replace the BASE_URL and endpoint paths with your actual API endpoints.
 */

const BASE_URL = "https://api.downtown.ng"; // TODO: Replace with your actual API base URL

export const requestClosureOtp = async (email, name) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/send-otp/2347047994999`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        recipient_type: "user",
        name: name,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send OTP");
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error requesting closure OTP:", error);
    throw error;
  }
};

/**
 * Step 2: Verify OTP and close account
 * Verifies the OTP and completes the account closure process
 *
 * @param {string} otp - The OTP received via email
 * @returns {Promise<Object>} - Response containing success status and message
 */
export const verifyClosureOtp = async (otp) => {
  try {
    const response = await fetch(`${BASE_URL}/users/delete/confirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp: otp }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to verify OTP");
    }

    return data;
  } catch (error) {
    console.error("Error verifying closure OTP:", error);
    throw error;
  }
};

/**
 * Optional: Resend OTP if user didn't receive it
 *
 * @param {string} email - The user's registered email address
 * @returns {Promise<Object>} - Response containing success status and message
 */
// export const resendClosureOtp = async (email) => {
//   try {
//     const response = await fetch(`${BASE_URL}/users/delete/resend-otp`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email }),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Failed to resend OTP");
//     }

//     return data;
//   } catch (error) {
//     console.error("Error resending closure OTP:", error);
//     throw error;
//   }
// };
