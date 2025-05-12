# Consistentcode problem setting service


# How outing works?
  /api/v1/problems/ping
because the route starts with /api
                                   
                                   /api     -> /v1      -> /problems     -> /ping  
                                  apiRouter -> v1Router -> problemRouter -> problemController -> service layer

- You should do proper error-handling using try-catch block