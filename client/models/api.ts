export interface UserSignupBody {
    userInfo: {
      username: string, 
      password: string
    }
  }
  
  export interface UserLoginBody {
    userInfo: {
      username: string,
      password: string
    }
  }
  
  
  export interface UserLoginSuccessResponse {
    authenticated: true, 
    userId: number
  }