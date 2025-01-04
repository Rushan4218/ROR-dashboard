class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def super_admin?
    role == 'super_admin'
  end

  def admin?
    role == 'admin'
  end

  def normal_user?
    role == 'normal_user'
  end
  
end
