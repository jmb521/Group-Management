class Auth


  def self.encode(user)
    payload = {user: user}
    JWT.encode payload, 'mysecret', 'HS256'
  end

  def self.decode(token)
    JWT.decode token, 'mysecret', true, {algorithm: 'HS256'}
  end
end
