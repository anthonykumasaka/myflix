# == Schema Information
#
# Table name: movies
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text             not null
#  genre       :string           not null
#  year        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class MovieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
